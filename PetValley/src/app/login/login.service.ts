import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {SERVER} from '../app.api';
import {User} from '../model/user.model';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    login(loginUser: User) {
        return this.http.post('SERVER', JSON.stringify(loginUser))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }
    validateUser(user: User): Observable<User[]> {
        return this.http.get('localhost:3000/')
        .map(response => response.json());
    }
}
