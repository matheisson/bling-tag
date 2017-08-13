import {Injectable} from '@angular/core';
import {HttpClient} from '../_httpclient/httpclient';
import {Router} from '@angular/router';
import {User} from '../_models/_index';
import {Observable} from 'rxjs/Observable';
import { DefaultResponse } from '../_models/_index';

@Injectable()
export class UserService {

    constructor(private client: HttpClient, private router: Router) {
    }

    public getUser(): Observable<User> {
        return this.client.get('/api/profile/details');
    }

    public signupUser(user: User): Observable<DefaultResponse> {
        return this.client.post('/api/profile/signup', user)
    }

    public loginUser(user: User): Observable<DefaultResponse> {
        return this.client.post('/api/profile/login', user)
    }

}
