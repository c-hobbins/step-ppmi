import { PersonName } from './person-name';
import { Address } from './address';

import { Email, Telephone } from './person-contactInfo';

export class Person {
    protected uci: string;
    protected relationship: string;
    protected primaryName: PersonName;
    protected addresses: Address[];
    protected phoneNumbers: Telephone[];
    protected emailAddress: Email;
    constructor() {}
}
