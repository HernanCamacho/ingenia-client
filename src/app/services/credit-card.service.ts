import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CreditCard } from '../models/credit-card';
import { Global } from './global.service';

@Injectable()
export class CreditCardService{
    public url: string;
    public token;

    constructor(public _http: HttpClient){
        this.url = Global.url;
    }

    store(creditCard: CreditCard): Observable<any>{
        let params = JSON.stringify(creditCard);
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.getToken());

        return this._http.post(this.url+'ccards', params, {headers: headers});
    }

    delete(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.getToken());
        return this._http.delete(this.url+'ccards/' + id, {headers: headers});
    }

    getCreditCards(page):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.getToken());
        return this._http.get(this.url + 'ccards?page=' + page, {headers: headers});
    }

    getToken(){
        let token = JSON.parse(localStorage.getItem('token'));
        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }
        return this.token;
    }
}
