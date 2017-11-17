import { Subject } from 'rxjs/Subject';
import { Response } from '@angular/http';
import { PostResponse } from './../model/post-response.model';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER } from './../app.api';
import { Pet } from './../model/pet.model';
//import { Vaccines } from './../model/vaccines.model';

@Injectable()

export class PetServices {
    constructor(private http: HttpClient) {}

    emitPetUpdate = new EventEmitter<any>();

    emitUpdate() {
        this.emitPetUpdate.emit();
    }
    
    pets():Observable<Pet[]>{        
        return this.http.get<Pet[]>(`${SERVER}/animal`);
    }

    deletePet(pet:any):Observable<any>{
        let url = `${SERVER}/animal/`+pet.id_animal;
        return this.http.delete<any>(url);
    }
    
    updatePet(pet:any):Observable<any>{
        let url = `${SERVER}/animal`;
        return this.http.put<any>(url, pet);
    }
}
