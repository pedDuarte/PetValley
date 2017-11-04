import { SERVER } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { User } from './../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class LoginService {

    private userLogged: User;

    constructor(private http: HttpClient) {}

    login(user: User): Observable<any> {
        return this.http.post<any>(`${SERVER}/login`, user);
    }

    isLogged(): boolean {
        if (this.userLogged === undefined) {
            return true;
        }
        return false;
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
