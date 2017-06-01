import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';


@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html',
    styleUrls: ['proposal.component.css'],
    providers: [ ProposalService ]
})

export class ProposalListComponent implements OnInit {
   // proposalOne: Proposal = new Proposal(1, 'ABC Company Ltd', 'http://google.com', 'Ruby on Rails, NodeJS', 300, 10, 25, 'email@domain.com')
   // proposalTwo: Proposal = new Proposal(2, 'DEFG Company Inc', 'http://google.com', 'Ruby on Rails, AngularJS', 60, 200, 35, 'email@domain.com')
   // proposalThree: Proposal = new Proposal(3, 'FGHI Society', 'http://google.com', 'Ruby on Rails, Javascript', 100, 80, 10, 'email@domain.com')



    proposals: Proposal[];

    errorMessage: string;
    mode= "Observable"; 

    constructor(
        private proposalService: ProposalService
    ) {}

    ngOnInit() {
        let timer = Observable.timer(0, 5000);
        timer.subscribe(() => this.getProposals());

    }

    getProposals(){
        this.proposalService.getProposals()
            .subscribe(
                proposals => this.proposals = proposals,
                error => this.errorMessage = <any>error
            );
    }

} 
