import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from '../model/user.model';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    validateUser(): Observable<User[]> {
        return this.http.get('localhost:3000/')
        .map(response => response.json());
    }
}
