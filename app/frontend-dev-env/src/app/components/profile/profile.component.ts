import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { User } from "../../_models/_index";
import { UserService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})
export class ProfileComponent{
    constructor(
          private eventsManager: GlobalEventsManager,
          private router: Router,
          private userService: UserService
      ){
          this.eventsManager.showNavBar(true);
      }
}
