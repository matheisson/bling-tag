import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { User, Firm, Commodity, Result, MailMessage, InfoMessage, Unit, Units, NumberOfUnit } from "../../_models/_index";
import { UserService, FirmService, CommodityService, MailService, UnitService } from '../../_services/_index';
import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent{

    public user: User = JSON.parse(localStorage.user);
    public firms: Firm[] = [];
    public commodities: Commodity[] = [];
    public selectedFirm: Firm;
    public chosenCommodity: Commodity;
    public numberOfShares = 10;
    public result: Result;
    public commoditySelectorActive: boolean = false;
    public isCalculating: boolean = false;
    public searchString: string;
    public mailMessage: MailMessage;
    public infoMessage: InfoMessage;
    public relatedUnits: Units[];
    public chosenUnits: Units;
    public chosenUnit: Unit;
    public converterActive: boolean;

    constructor(
          private eventsManager: GlobalEventsManager,
          private router: Router,
          private userService: UserService,
          private firmService: FirmService,
          private commodityService: CommodityService,
          private mailService: MailService,
          private unitService: UnitService
    ){
          this.eventsManager.showNavBar(true);
          if (localStorage["auth-token"]) {
            this.userService.getUser().subscribe(
              (user: User) => localStorage.setItem("user", JSON.stringify(user))
            )
          }
          this.firmService.getFirms().subscribe(
              (data: any) => this.firms = data["baseFirms"]
          )
          this.commodityService.getCommodities().subscribe(
              (data: any) => this.commodities = data["all_commodities"]
          )
          this.monitorMessages()
    }

    monitorMessages(){
        let currentText;
        let counter = 0;
        setInterval(() => {
            if (this.infoMessage != null) {
                if (currentText == this.infoMessage.text) { counter += 1; }
                if (currentText !== this.infoMessage.text) { currentText = this.infoMessage.text; }
                if (counter == 0) { this.infoMessage = null; }
            }
        }, 500)
    }

    selectFirm(firm){
        this.selectedFirm = firm;
    }

    disabledSearch(){
      return !(this.searchString && this.searchString.length > 2);
    }

    isSelected(firm){
        return firm == this.selectedFirm ? "selected-firm" : "unselected-firm"
    }

    isRegistered(){
        return JSON.parse(localStorage.user).user ? true : false;
    }

    isUpgraded(){
        return JSON.parse(localStorage.user).is_paid ? true : false;
    }

    getRandomResult(){
        this.chosenCommodity = _.sample(this.commodities);
        this.getUnits();
    }

    toggleConverter(){
        this.converterActive = !this.converterActive;
    }

    getCommoditySelector(){
        this.commoditySelectorActive = true;
    }

    getResult(commodity){
        this.commoditySelectorActive = false;
        this.chosenCommodity = commodity;
        this.getUnits();
    }

    createResult(){

        let numberOfUnits = [];
        if (this.chosenUnit){
          let number = ((this.numberOfShares * this.selectedFirm.stock_price) / this.chosenCommodity.price) / this.chosenUnit.multiplier;
          let numberOfUnit = new NumberOfUnit(this.chosenUnit.name, Math.trunc(number));
          numberOfUnits.push(numberOfUnit);
        } else {
          let initialValue = this.numberOfShares * this.selectedFirm.stock_price
          for (let unit of this.chosenUnits.list_of_units){
              let integers = Math.trunc(initialValue / (this.chosenCommodity.price * unit.multiplier));
              let remainder = initialValue % (this.chosenCommodity.price * unit.multiplier);
              let numberOfUnit = new NumberOfUnit(unit.name, integers);
              initialValue = initialValue - (integers * this.chosenCommodity.price * unit.multiplier);
              numberOfUnits.push(numberOfUnit);
          }
        }

        let user = JSON.parse(localStorage.user);
        this.result = new Result(user, this.selectedFirm, this.chosenCommodity, numberOfUnits);
        let value = this.numberOfShares * this.selectedFirm.stock_price
        let username = user.user ? user.user : "";
        this.mailMessage = new MailMessage(username, numberOfUnits, this.selectedFirm.short_name, value, this.chosenCommodity.name);
    }

    getUnits(){
        this.isCalculating = true;
        this.unitService.getRelatedUnits(this.chosenCommodity).subscribe(
            (data: any) => {
                let parsedData = data["units"].map((units) => {
                    console.log(units.list_of_units);
                    units.list_of_units = JSON.parse(units.list_of_units).sort((e1, e2) => e2.multiplier - e1.multiplier);
                    return units;
                })
                let baseUnit = new Unit("piece", 1);
                let baseUnits = [new Units("NumberOf", [baseUnit])];
                this.relatedUnits = parsedData.length > 0 ? parsedData : baseUnits;
                this.chosenUnits = this.relatedUnits[0];
                this.chosenUnit = null;
                this.isCalculating = false;
                this.createResult();
            }
        )
    }

    selectUnits(units: Units){
        this.chosenUnits = units;
        this.chosenUnit = null;
        this.createResult()
    }

    selectUnit(unit: Unit){
        this.chosenUnit = unit;
        this.createResult()
    }

    restartProcess(){
        this.numberOfShares = 10;
        this.result = null;
        this.chosenCommodity = null;
        this.selectedFirm = null;
    }

    noFirm(){
        return this.selectedFirm == null;
    }

    noResult(){
        return this.result == null;
    }

    shouldShowCommodities(){
        return this.commoditySelectorActive && !this.isCalculating;
    }

    convertName(name){
        return name.length < 21 ? name : name.substring(0, 21) + "...";
    }

    filterFirms(){
        this.firmService.filterFirms(this.searchString).subscribe(
            (data: any) => this.firms = data["firm"]
        )
    }

    resetFirms(){
        this.searchString = null;
        this.firmService.getFirms().subscribe(
            (data: any) => this.firms = data["baseFirms"]
        )
    }

    sendMail(){
        this.mailService.sendMail(this.mailMessage).subscribe(
            (response: any) => {
                this.infoMessage = new InfoMessage("Success", "Email sent", "success");
                this.restartProcess()
            }
        )
    }

    disabledSend(){
        if (!this.mailMessage.email){
          return false;
        }
        if (!this.mailMessage.username){
          return false;
        }
        return !(this.mailMessage.username.length > 0) || !this.mailMessage.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    firmsShouldDisappear(){
        return (this.commoditySelectorActive || this.isCalculating) ? "no-mobile" : "present";
    }

    commodityShouldDisappear(){
        return (this.commoditySelectorActive || this.isCalculating) ? "present" : "no-mobile";
    }
}
