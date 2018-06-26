import { PersonName } from './person-name';
import { Address } from './address';
import { DateOfBirth } from './date-of-birth';
import { PlaceOfBirth } from './place-of-birth';
import { Email, Telephone } from './person-contactInfo';

export class Client {
    constructor() {}

    public uci: string;
    public eyeColor: string;
    public height: string;
    public gender: string;
    public pob: PlaceOfBirth;
    public dob: DateOfBirth;
    public primaryName: PersonName;
    public birthName: PersonName;
    public formerName: PersonName;
    public motherMaidenName: PersonName;
    public addresses: Address[];
    public phoneNumbers: Telephone[];
    public emailAddress: Email;
}
