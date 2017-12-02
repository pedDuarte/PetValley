import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER } from './../app.api';
import { PostResponse } from './../model/post-response.model';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class SendDocumentService
{
    constructor(private http: HttpClient) {
    }

    saveDocuments(documentos: any):Observable<PostResponse>{
        this.http.post<PostResponse>(`${SERVER}/document`, documentos.value.rg).subscribe(response => {
            if(response.success)
            {
               this.http.post<PostResponse>(`${SERVER}/document`, documentos.value.comprovanteEndereco).subscribe(Response => {
                   return;
               })
            }
        });
        return;
    }
}