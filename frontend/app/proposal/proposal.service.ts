import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { Proposal } from './proposal';


@Injectable()
export class ProposalService {
	private proposalsUrl = 'http://localhost:3003/proposals.json';

//constructor make use of http requests
	constructor(
		private http: Http
	) {}

	getProposals(): Observable<Proposal[]> {

        //connecting to the api, and mapping the reply as a json array Document[] and then catch errors
		return this.http.get(this.proposalsUrl)
										.map((response: Response) => <Proposal[]>response.json())
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
