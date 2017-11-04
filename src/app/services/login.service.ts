import { SERVER } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { User } from './../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class LoginService {

    public userLogged: User;

    constructor(private http: HttpClient) { this.userLogged = undefined; }

    login(user: User): Observable<any> {
        return this.http.post<any>(`${SERVER}/login`, user);
    }

    isLogged(): boolean {
        if (this.userLogged === undefined) {
            return false;
        }
        return true;
    }

    getUserLogged() {
        return this.userLogged;
    }

    signIn(user: User) {
        this.userLogged = user;
    }

    signOut() {
        this.userLogged = undefined;
    }
}
