import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { User } from "../../_models/_index";
import { UserService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'init.component.html',
    styleUrls: ['init.component.css'],
})
export class InitComponent{

    public user: User;

    constructor(
          private eventsManager: GlobalEventsManager,
          private router: Router,
          private userService: UserService
    ){
          this.eventsManager.showNavBar(true);
          this.userService.getUser().subscribe(
              (user: User) => {
                  sessionStorage.setItem('user', JSON.stringify(user));
                  if (sessionStorage.loginSeen) { this.router.navigate(['']); } else { this.router.navigate(['login']); }
              },
              (error) => {
                  sessionStorage.setItem('user', JSON.stringify(new User()));
                  if (sessionStorage.loginSeen) { this.router.navigate(['']); } else { this.router.navigate(['login']); }
              }
          )
    }
}
