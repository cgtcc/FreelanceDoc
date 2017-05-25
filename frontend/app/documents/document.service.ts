import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Document } from './documents';

@Injectable()
export class DocumentService {
	private documentsUrl = 'http://localhost:3003/freelance_documents.json';

//constructor make use of http requests
	constructor(
		private http: Http
	) {}

	getDocuments(): Observable<Document[]> {

        //connecting to the api, and mapping the reply as a json array Document[] and then catch errors
		return this.http.get(this.documentsUrl)
										.map((response: Response) => <Document[]>response.json())
										.catch(this.handleError);
	}


    // errors management (from angular documentation @ https://angular.io/docs/ts/latest/guide/server-communication.html#!#error-handling )
	private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}