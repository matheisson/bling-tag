import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.user && JSON.parse(localStorage.user)["user"]) {
            return true;
        }
        if (localStorage.user && sessionStorage.loginSeen) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
