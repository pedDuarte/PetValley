import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER } from './../app.api';
import { PostResponse } from './../model/post-response.model';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class chartServices
{
    constructor(private http: HttpClient) {
    }

    getDados():Observable<any>{
        debugger;
        return this.http.get<any>(`${SERVER}/adoptioncount`);
    }
}