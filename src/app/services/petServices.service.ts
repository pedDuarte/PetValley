import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER } from './../app.api';
import { Pet } from './../model/pet.model';
//import { Vaccines } from './../model/vaccines.model';

@Injectable()

export class PetServices {
    constructor(private http: HttpClient) {}

    pets():Observable<Pet[]>{
        return this.http.get<Pet[]>(`${SERVER}/animal`);
    }
}
