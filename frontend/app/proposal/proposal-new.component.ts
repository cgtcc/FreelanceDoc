import { Component } from '@angular/core';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'proposal-new',
    templateUrl: './proposal-new.component.html',
    styleUrls: ['proposal.component.css'],
    providers: [ ProposalService ]

})

export class ProposalNewComponent {
    proposal = new Proposal;
    //next line concern the [hidden]="submitted" tag in the proposal-new.component.html file
    submitted: boolean = false;


constructor (
    private proposalService: ProposalService
) {}

createProposal(proposal:Proposal){
    this.submitted = true;
    this.proposalService.createProposal(proposal)
        .subscribe(
            data => { return true },
            error => {
                console.log("Error saving proposal");
                return Observable.throw(error);
            }
    );
}


}