import { Component } from '@angular/core';
import { Document } from './documents';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: './documents.component.html'
})

export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"

    documents: Document[] = [  //documents type must be an array

        {
            title: "Document 1",
            description: "lorem ipsum",
            file_url: 'http://google.com',
            updated_at: '05/14/2017',
            image_url: './images/1.svg'
        },

        {
            title: "Document 2",
            description: "lorem ipsum",
            file_url: 'http://google.com',
            updated_at: '05/14/2017',
            image_url: './images/1.svg'
        },

        {
            title: "Document 3",
            description: "lorem ipsum",
            file_url: 'http://google.com',
            updated_at: '05/14/2017',
            image_url: './images/1.svg'
        },
    ]
}