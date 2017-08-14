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

    upgrade(){
        alert("Payment should come here");
    }

    login(){
        this.router.navigate(['login']);
    }

    logout(){
        localStorage.removeItem("auth-token");
        localStorage.removeItem("user");
        this.router.navigate(['login']);
    }

    shouldShowLogout(){
        if (localStorage.user) {
          return JSON.parse(localStorage.user)["user"] ? true : false;
        } else {
          return false;
        }
    }

    shouldShowUpgrade(){
        if (localStorage.user) {
            return (JSON.parse(localStorage.user)["is_paid"] === false);
        } else {
            return false;
        }
    }

    shouldShowLogin(){
        return !this.shouldShowLogout() && this.router.url !== '/login';
    }

}
