import {Injectable} from '@angular/core';
import {HttpClient} from '../_httpclient/httpclient';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { DefaultResponse, MailMessage } from '../_models/_index';

@Injectable()
export class MailService {

    constructor(private client: HttpClient, private router: Router) {
    }

    public sendMail(mailMessage: MailMessage): Observable<DefaultResponse> {
        return this.client.post('/api/stock/share', mailMessage);
    }

}
