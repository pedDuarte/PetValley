import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {SERVER} from '../app.api';
import {User} from '../model/user.model';

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    list() {
        return this.http.get(`${SERVER}/users`)
        .map(response => response.json());
    }
}
