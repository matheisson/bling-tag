import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { User, Firm, Commodity, Result, MailMessage } from "../../_models/_index";
import { UserService, FirmService, CommodityService, MailService } from '../../_services/_index';
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

    constructor(
          private eventsManager: GlobalEventsManager,
          private router: Router,
          private userService: UserService,
          private firmService: FirmService,
          private commodityService: CommodityService,
          private mailService: MailService
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
    }

    selectFirm(firm){
        this.selectedFirm = firm;
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
        this.createResult();
    }

    getCommoditySelector(){
        this.commoditySelectorActive = true;
    }

    getResult(commodity){
        this.commoditySelectorActive = false;
        this.chosenCommodity = commodity;
        this.createResult();
    }

    createResult(){
        this.isCalculating = true;
        setTimeout(() => {
          let user = JSON.parse(localStorage.user);
          this.isCalculating = false;
          let numberOfCommodities = this.selectedFirm.stock_price * this.numberOfShares / this.chosenCommodity.price;
          this.result = new Result(user, this.selectedFirm, this.chosenCommodity, numberOfCommodities);
          let value = numberOfCommodities * this.selectedFirm.stock_price
          this.mailMessage = new MailMessage(user.user, numberOfCommodities, this.selectedFirm.short_name, value, this.chosenCommodity.name);
        }, 2000);
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
            (response: any) => console.log(response)
        )
    }
}
