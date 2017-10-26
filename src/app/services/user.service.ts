import { ErrorHandler } from './../app.error-handler';
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SERVER } from '../app.api';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
    constructor(/*private http: HttpClient*/) {}

   /* login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${SERVER}/login`, {email: email, password: password});
    }*/

    users() {
        /*return this.http.get(`${SERVER}/users`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);*/
    }
}
