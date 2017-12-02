import { Subject } from 'rxjs/Subject';
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

    // Observable string sources
    private emitEditSource = new Subject<any>();
    // Observable string streams
    editEmitted$ = this.emitEditSource.asObservable();
    // Service message commands
    emitEdit() {
        this.emitEditSource.next();
    }


    users(): Observable<User[]> {
        return this.http.get<User[]>(`${SERVER}/user`);
    }

    deleteUser(user: any): Observable<any> {
        let url = `${SERVER}/user/` + user.id_user;
        return this.http.delete<any>(url);
    }

    edit(user: any): Observable <any> {
        console.log(user);
        return this.http.put(`${SERVER}/user`, user);
    }
}
