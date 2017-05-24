import{ Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Document } from './document';

@Injectable()

export class DocumentService {
    private documentsUrl = 'http://localhost:3003/freelance_document.json'
}