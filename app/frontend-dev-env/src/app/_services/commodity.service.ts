import { Injectable } from '@angular/core';
import { HttpClient } from '../_httpclient/httpclient';
import { Router } from '@angular/router';
import { Commodity } from '../_models/_index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommodityService {

    constructor(private client: HttpClient, private router: Router) {
    }

    public getCommodities(): Observable<Commodity[]> {
        return this.client.get('/api/stock/allcommodities');
    }

}
