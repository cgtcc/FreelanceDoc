import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(1, 'ABC Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'email@domain.com')
    //see proposal class in proposal.ts for type Proposal
    proposalTwo: Proposal = new Proposal(2, 'ABCD Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'email@domain.com')

    proposalThree: Proposal = new Proposal(3, 'ABCDE Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'email@domain.com')

    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree
    ]

} 
