import { Component } from '@angular/core';
import { Contact } from './contact';


@Component({
    moduleId: module.id,
    selector: 'contact-new',
    templateUrl: './contact-new.component.html',
    styleUrls: ['contact.component.css']

})

export class ContactNewComponent {
    contact = new Contact;

}