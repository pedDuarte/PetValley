import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {SERVER} from '../app.api';
import {User} from '../model/user.model';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    loginJQuery(loginUser: User) {
        $.post(`${SERVER}/login`,
        loginUser,
        function(data, status){
            return data;
        });
    }

    /*login(loginUser: User): Observable<User> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(`${SERVER}/login`, loginUser, {headers: headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }*/
    validateUser(user: User): Observable<User[]> {
        return this.http.get('localhost:3000/')
        .map(response => response.json());
    }
}
