import {Injectable} from '@angular/core';
import {HttpClient} from '../_httpclient/httpclient';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { DefaultResponse, Unit, Units, Commodity } from '../_models/_index';

@Injectable()
export class UnitService {

    constructor(private client: HttpClient, private router: Router) {
    }

    public getRelatedUnits(commodity: Commodity): Observable<Units[]> {
        return this.client.get('/api/stock/relatedunits?commodity=' + commodity.id);
    }

}
