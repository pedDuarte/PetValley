import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER } from './../app.api';
import { Pet } from './../model/pet.model';
//import { Vaccines } from './../model/vaccines.model';
import { PostResponse } from './../model/post-response.model';

@Injectable()
export class RegisterPetService{

    constructor(private http: HttpClient) {
    }

addPet(pet:Pet):Observable<Pet>{
    return this.http.post<Pet>(`${SERVER}/animal`, pet);
}

}
