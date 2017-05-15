"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Proposal {
    constructor(id, customer, portfolio_url = 'http://', tools, estimated_hours, hourly_rate, weeks_to_complete, client_email) {
        this.id = id;
        this.customer = customer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.client_email = client_email;
    }
}
exports.Proposal = Proposal;
//# sourceMappingURL=proposal.js.map