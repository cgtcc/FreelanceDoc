import { Component } from '@angular/core';
import { Document } from './documents';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: './documents.component.html',
    styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"

    documents: Document[] = [  //documents type must be an array

        {
            title: "Document 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            file_url: 'http://google.com',
            updated_at: '05/14/2017',
            image_url: './images/1.svg'
        },

        {
            title: "Document 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            file_url: 'http://google.com',
            updated_at: '05/14/2017',
            image_url: './images/1.svg'
        },

        {
            title: "Document 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            file_url: 'http://google.com',
            updated_at: '05/14/2017',
            image_url: './images/1.svg'
        },
    ]
}