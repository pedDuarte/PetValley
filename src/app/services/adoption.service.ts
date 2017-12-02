import { Observable } from 'rxjs/Observable';
import { SERVER } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AdoptionService {

    constructor(private http: HttpClient) {}

    setAdoption(userId, petId): Observable<any> {
        console.log(petId);
        return this.http.post<any>(`${SERVER}/adoption`,
        {'id_user_fk': userId, 'id_animal_fk': petId, 'is_approved': false});
    }

    getAdoptions() {
        return this.http.get(`${SERVER}/adoptionpendent`);
    }

    approve(idUser, idAnimal) {
        return this.http.put(`${SERVER}/adoption`, {'id_user_fk': idUser, 'id_animal_fk': idAnimal, 'is_approved': true});
    }
}
