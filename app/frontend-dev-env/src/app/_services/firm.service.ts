import { Injectable } from '@angular/core';
import { HttpClient } from '../_httpclient/httpclient';
import { Router } from '@angular/router';
import { Firm } from '../_models/_index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirmService {

    constructor(private client: HttpClient, private router: Router) {
    }

    public getFirms(): Observable<Firm[]> {
        return this.client.get('/api/stock/basefirms');
    }

    public filterFirms(firm): Observable<Firm[]> {
        return this.client.get('/api/stock/firm?name=' + firm);
    }

}
