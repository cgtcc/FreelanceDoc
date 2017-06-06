import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-new',
    templateUrl: './proposal-new.component.html',
    styleUrls: ['proposal.component.css']

})

export class ProposalNewComponent {
    proposal = new Proposal;
    //next line concern the [hidden]="submitted" tag in the proposal-new.component.html file
    submitted: boolean = false;

}