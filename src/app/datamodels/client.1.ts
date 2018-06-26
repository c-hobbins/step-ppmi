import { Person } from './person';
import { PersonName } from './person-name';
import { DateOfBirth } from './date-of-birth';
import { PlaceOfBirth } from './place-of-birth';

export class Client extends Person {

    constructor(
        public uci: string,
        public eyeColor: string,
        public height: string,
        public gender: string,
        public pob: PlaceOfBirth,
        public dob: DateOfBirth,
        public birthName: PersonName,
        public formerName: PersonName,
        public motherMaidenName: PersonName
    ) { super(); }
}
