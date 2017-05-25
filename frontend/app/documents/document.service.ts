import{ Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Document } from './documents';

@Injectable()

export class DocumentService {
    private documentsUrl = 'http://localhost:3003/freelance_document.json';

    constructor(
        private http: Http
    ) {}

    getDocuments(): Observable<Document[]>  //here we want getDocuments to return an array of Documents from the Observable

        {
            return this.http.get(this.documentsUrl)
                            .map((response: Response) => <Document[]>response.json())  // map a response we can work with - a response of type response
        }
}