import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { User, DefaultResponse, InfoMessage } from "../../_models/_index";
import { UserService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent{

    public user: User = new User();
    public messages: InfoMessage[] = [];

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
            (response: DefaultResponse) => {
                if (!response.is_successful) {
                    this.messages.push(new InfoMessage("Error", "Invalid credentials", "error"));
                }
                console.log(response);
            }
        )
    }

    requestSignup(){
        this.userService.signupUser(this.user).subscribe(
            (response: DefaultResponse) => {
                if (!response.is_successful) {
                    this.messages.push(new InfoMessage("Error", "Occupied username", "error"));
                }
                console.log(response);
            }
        )
    }

    getHome(){
        this.router.navigate(['']);
    }

}
