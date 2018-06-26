export class Address {
    constructor (
        public type: string,
        public streetNum: string,
        public streetLine1: string,
        public city: string,
        public provstate: string,
        public postzip: string,
        public streetLine2?: string,
        public aptNum?: string )
        {}
}
