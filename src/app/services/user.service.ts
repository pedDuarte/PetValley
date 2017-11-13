import { PostResponse } from './../model/post-response.model';
import { ErrorHandler } from './../app.error-handler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SERVER } from '../app.api';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    users(): Observable<User[]> {
        return this.http.get<User[]>(`${SERVER}/user`);
    }

    /*delete(user: User): Observable<any> {
        return this.http.delete<any>(`${SERVER}/user`,);
    }*/
}
