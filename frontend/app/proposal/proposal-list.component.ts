import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal (15, 'ABC Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'email@domain.com')
 //see proposal class in proposal.ts for type Proposal
proposalTwo: Proposal = new Proposal (15, 'ABC Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'email@domain.com')

proposalThree: Proposal = new Proposal (15, 'ABC Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'email@domain.com')
} 
