import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SERVER } from './../app.api';
import { User } from './../model/user.model';
import { Address } from './../model/address.model';
import { PostResponse } from './../model/post-response.model';

@Injectable()
export class RegisterUserService {

    public user: User;

    constructor(private http: HttpClient) {
    }

    // Observable string sources
    private emitRegisterSource = new Subject<any>();
    // Observable string streams
    registerEmitted$ = this.emitRegisterSource.asObservable();
    // Service message commands
    emitRegister() {
        this.emitRegisterSource.next(this.user);
    }

    setPersonalData(data: any) {
        this.user = new User();
        this.user.name = data.name;
        this.user.surname = data.surname;
        this.user.code_cpf = data.cpf;
        this.user.birthdate = data.birthday;
        this.user.sex = data.sex;
        this.user.cellphone = data.cellphone;
        this.user.phone_number = data.phone;
    }

    setPessonalAddress(data: any) {
        this.user.address = new Address();
        this.user.address.postal_code = data.postalCode;
        this.user.address.type_location = data.typeLocation;
        this.user.address.location = data.location;
        this.user.address.number_house = data.numberHouse;
        this.user.address.complement = data.complement !== undefined ? data.complement : undefined;
        this.user.address.neighborhood = data.neighborhood;
        this.user.address.city = data.city;
        this.user.address.state = data.state;
    }

    setPersonalLogin(data: any) {
        this.user.email = data.email;
        this.user.password = data.password;
    }

    setImage(data: any) {
        this.user.image = data;
    }

    getUser() {
        return this.user;
    }

    getAddress(cep: any) {
        const header = new HttpHeaders;
        header.append('Access-Control-Allow-Origin', '*');
        return this.http.get<any>("https://viacep.com.br/ws/"+cep+"/json/");
    }

    hasPersonalData() {
        if (this.user && this.user.name !== undefined) {
            return true;
        }
        return false;
    }

    hasPersonalAddress() {
        if (this.user && this.user.address !== undefined) {
            return true;
        }
        return false;
    }

    hasPersonalLogin() {
        if (this.user && this.user.email !== undefined) {
            return true;
        }
        return false;
    }

    addUser() {
        const header = new HttpHeaders();
        header.append('Access-Control-Allow-Origin', '*');
        return this.http.post(`${SERVER}/user`, this.user, {headers: header});
    }
}
