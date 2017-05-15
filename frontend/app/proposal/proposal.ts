export class Proposal {
    constructor(
        public id?: number, //? = optional, with type number
        public customer?: string,
        public portfolio_url: string = 'http://', //http:// is the default field value
        public tools?: string,
        public estimated_hours?: number,
        public hourly_rate?: number,
        public weeks_to_complete?: number,
        public client_email?: string,
    ) { }
}