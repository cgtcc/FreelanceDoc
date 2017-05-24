export class Contact {
    constructor(
        public yourName: string = 'What is your name?', //? = optional, with type number
        public yourEmail: string = 'What is your email?',
        public message: string = 'Type your message here...',
    ) { }

}