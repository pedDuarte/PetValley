import { Address } from './../model/address.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { User } from './../model/user.model';
import { UserService } from './../services/user.service';

@Injectable()
export class RegisterUserService {

    public user: User;

    constructor(private userService: UserService) {
    }

    // Observable string sources
    private emitRegisterSource = new Subject<any>();
    // Observable string streams
    registerEmitted$ = this.emitRegisterSource.asObservable();
    // Service message commands
    emitRegister(user: User) {
        this.emitRegisterSource.next(user);
    }

    setPersonalData(data: any) {
        this.user = new User();
        this.user.name = data.name;
        this.user.surname = data.surname;
        this.user.cpf = data.cpf;
        this.user.birthday = data.birthday;
        this.user.sex = data.sex;
        this.user.cellphone = data.cellphone;
        this.user.phone = data.phone;
    }

    setPessonalAddress(data: any) {
        this.user.adress = new Address();
        this.user.adress.postalCode = data.postalCode;
        this.user.adress.typeLocation = data.typeLocation;
        this.user.adress.location = data.location;
        this.user.adress.numberHouse = data.numberHouse;
        this.user.adress.complement = data.complement !== undefined ? data.complement : undefined;
        this.user.adress.neighborhood = data.neighborhood;
        this.user.adress.city = data.city;
        this.user.adress.state = data.state;
    }

    setPersonalLogin(data: any) {
        this.user.email = data.email;
        this.user.password = data.password;
    }

    hasPersonalData() {
        if (this.user && this.user.name !== undefined) {
            return true;
        }
        return false;
    }

    hasPersonalAddress() {
        if (this.user && this.user.adress !== undefined) {
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

}
