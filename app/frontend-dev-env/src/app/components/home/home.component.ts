import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { User, Firm, Commodity } from "../../_models/_index";
import { UserService, FirmService, CommodityService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent{

    public user: User;
    public firms: Firm[] = [];
    public commodities: Commodity[] = [];

    constructor(
          private eventsManager: GlobalEventsManager,
          private router: Router,
          private userService: UserService,
          private firmService: FirmService,
          private commodityService: CommodityService
    ){
          this.eventsManager.showNavBar(true);
    }
}
