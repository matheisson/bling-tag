import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { UserService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    selector: 'navbar'
})
export class NavBarComponent {

    public showNavBar = false;

    constructor(
        private router: Router,
        private globalEventsManager: GlobalEventsManager,
        private userService: UserService
      ) {
          this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
              if (mode !== null) { this.showNavBar = mode; }
      });
    }

    logout() {
        this.globalEventsManager.showNavBar(false);
    }

}
