import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';


@Component({
    moduleId: module.id,
    selector: 'proposal-show',
    templateUrl: './proposal-show.component.html',
    styleUrls: ['proposal.component.css'],
    providers: [ ProposalService ]

})
export class ProposalShowComponent implements OnInit {
  
    //getting the route url, so we can create a link with the id of the proposal (see .html file)    
    constructor(
        private route: ActivatedRoute,
        private proposalService: ProposalService,
        private http: Http
        )
         { }

         @Input()
         proposal: Proposal;

    ngOnInit(): void {  //return void value -  action only
   let proposalRequest = this.route.params //this represent our show proposal request
        .flatMap(( params: Params) =>
            this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(response => this.proposal = response.json())
    }
}