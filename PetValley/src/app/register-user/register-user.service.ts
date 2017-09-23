import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from '../model/user.model';

@Injectable()
export class RegisterUserService {
    constructor(private http: Http) {

    }

    registerUser(user: User) {
        

    }

    modifyUser() {

    }

    listUser() {

    }
}
