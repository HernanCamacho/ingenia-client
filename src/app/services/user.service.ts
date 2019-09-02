import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { Global } from './global.service';

@Injectable()
export class UserService{
    public url: string;
    public identity;

    constructor(public _http: HttpClient){
        this.url = Global.url;
    }

    register(user: User): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'users', params, {headers: headers});
    }

    login(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'login', params, {headers: headers});
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
    }

    persistData(token, identity){
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('identity', JSON.stringify(identity));

        return true;
    }
}
