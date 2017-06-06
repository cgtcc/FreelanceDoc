"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Rx_1 = require("rxjs/Rx");
const router_1 = require("@angular/router");
const proposal_service_1 = require("./proposal.service");
let ProposalListComponent = class ProposalListComponent {
    constructor(proposalService, router) {
        this.proposalService = proposalService;
        this.router = router;
        this.mode = "Observable";
    }
    ngOnInit() {
        let timer = Rx_1.Observable.timer(0, 5000);
        timer.subscribe(() => this.getProposals());
    }
    getProposals() {
        this.proposalService.getProposals()
            .subscribe(proposals => this.proposals = proposals, error => this.errorMessage = error);
    }
    goToShow(proposal) {
        let link = ['/proposal', proposal.id];
        this.router.navigate(link);
    }
};
ProposalListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-list',
        templateUrl: 'proposal-list.component.html',
        styleUrls: ['proposal.component.css'],
        providers: [proposal_service_1.ProposalService]
    }),
    __metadata("design:paramtypes", [proposal_service_1.ProposalService,
        router_1.Router])
], ProposalListComponent);
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map