import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-show',
    templateUrl: './proposal-show.component.html'
})
export class ProposalShowComponent implements OnInit {
    id: number;
    routeId: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {  //return void value -  action only
        this.routeId = this.route.params.subscribe(
            params => {
                this.id = +params['id'];  //the + convert the value of params (url) to a number instead of string
            }
        )
    }
}