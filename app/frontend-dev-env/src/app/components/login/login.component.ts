import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { User } from "../../_models/_index";
import { UserService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent{

    public user: User = new User();

    constructor(
          private eventsManager: GlobalEventsManager,
          private router: Router,
          private userService: UserService
    ){
          this.eventsManager.showNavBar(true);
          sessionStorage.setItem('loginSeen', 'true');
    }

    requestLogin(){
        this.userService.loginUser(this.user).subscribe(
            (data: any) => console.log(data)
        )
    }

    requestSignup(){
        this.userService.signupUser(this.user).subscribe(
            (data: any) => console.log(data)
        )
    }

}
