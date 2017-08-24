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
    public infoMessage: InfoMessage;

    constructor(
          private eventsManager: GlobalEventsManager,
          private router: Router,
          private userService: UserService
    ){
          this.eventsManager.showNavBar(true);
          sessionStorage.setItem('loginSeen', 'true');
          this.monitorMessages();
    }

    monitorMessages(){
        let currentText;
        let counter = 0;
        setInterval(() => {
            if (this.infoMessage != null) {
              if (currentText == this.infoMessage.text) { counter += 1; }
              if (currentText !== this.infoMessage.text) { currentText = this.infoMessage.text; }
              if (counter == 3) { this.infoMessage = null; counter = 0; }
            }
        }, 1000)
    }

    requestLogin(){
        this.userService.loginUser(this.user).subscribe(
            (response: any) => {
                if (response["authToken"]){
                    localStorage.setItem("auth-token", response["authToken"]);
                    this.getHome();
                } else {
                    this.infoMessage = new InfoMessage("Error", "Invalid credentials", "error");
                }
            }
        )
    }

    requestSignup(){
        this.userService.signupUser(this.user).subscribe(
            (response: DefaultResponse) => {
                if (!response.is_successful) {
                    this.infoMessage = new InfoMessage("Error", "Occupied username", "error");
                } else {
                    this.infoMessage = new InfoMessage("Success", "Welcome to our site", "success");
                    this.user = new User();
                }
            }
        )
    }

    disabledSignup(){
      return !this.user.username || !this.user.password || !(this.user.username.length > 5)|| !(this.user.password.length > 9) || this.user.password != this.user.passwordAgain;
    }

    disabledLogin(){
       return !this.user.username || !this.user.password || !(this.user.username.length > 5)|| !(this.user.password.length > 9);
    }

    getHome(){
        localStorage.setItem("user", JSON.stringify(new User()));
        this.router.navigate(['']);
    }

}
