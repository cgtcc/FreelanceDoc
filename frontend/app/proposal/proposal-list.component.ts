import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html',
    styleUrls: ['proposal.component.css']
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(1, 'ABC Company Ltd', 'http://google.com', 'Ruby on Rails, NodeJS', 300, 10, 25, 'email@domain.com')
    //see proposal class in proposal.ts for type Proposal
    proposalTwo: Proposal = new Proposal(2, 'DEFG Company Inc', 'http://google.com', 'Ruby on Rails, AngularJS', 60, 200, 35, 'email@domain.com')

    proposalThree: Proposal = new Proposal(3, 'FGHI Society', 'http://google.com', 'Ruby on Rails, Javascript', 100, 80, 10, 'email@domain.com')

    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree
    ]

} 
