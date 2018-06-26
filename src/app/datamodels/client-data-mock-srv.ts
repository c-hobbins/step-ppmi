import { Client } from './client';

export const clients: Client[] = [
    {
        uci: '123456789',
        eyeColor: 'Brown',
        height: '5 10',
        gender: 'Male',
        pob: {city: 'Toronto', country: 'Canada', provstate: 'ON'},
        dob: {year: '1980', month: '07', day: '22'},
        primaryName: { type: 'Primary', firstName: 'Optimus', lastName: 'Prime'},
        birthName: { type: 'Birth', firstName: '', lastName: 'Sub-Prime'},
        formerName: { type: 'Former', firstName: '', lastName: 'Prime'},
        motherMaidenName: {type: 'Maiden', firstName: '', lastName: 'Sub-Prime'},
        addresses: [
            { type: 'Residence', streetNum: '11', streetLine1: 'Main Street',
                streetLine2: '', aptNum: '', city: 'Ottawa', provstate: 'ON', postzip: 'H7G-5R6'},
            { type: 'Mailing', streetNum: '11', streetLine1: 'Main Street',
                streetLine2: '', aptNum: '', city: 'Ottawa', provstate: 'ON', postzip: 'H7G-5R6'}
        ],
        phoneNumbers: [
            { type: 'Home', phoneNum: '613-898-8972' },
            { type: 'Cell', phoneNum: '613-265-5552' }
        ],
        emailAddress: { emailAddr: 'snail@fakedomain.com'}
    },
    {
        uci: '45325678',
        eyeColor: 'Brown',
        height: '6 04',
        gender: 'Female',
        pob: {city: 'Shelbyville', country: 'Canada', provstate: 'SK'},
        dob: {year: '1975', month: '11', day: '16'},
        primaryName: { type: 'Primary', firstName: 'Marge', lastName: 'Simpson'},
        birthName: { type: 'Birth', firstName: '', lastName: 'Smith'},
        formerName: { type: 'Former', firstName: '', lastName: 'Burns'},
        motherMaidenName: { type: 'Maiden', firstName: '', lastName: 'Smith'},
        addresses: [
            { type: 'Residence', streetNum: '11', streetLine1: 'Isotope Crt',
                streetLine2: '', aptNum: '', city: 'Springfield', provstate: 'SK', postzip: 'H3G-1Y6'},
            { type: 'Mailing', streetNum: '1200', streetLine1: 'Stonecutter Way',
                streetLine2: '', aptNum: '2B', city: 'Shelbyville', provstate: 'AB', postzip: 'A7P-5M8'}
        ],
        phoneNumbers: [
            { type: 'Home', phoneNum: '613-333-1122' },
            { type: 'Cell', phoneNum: '613-777-6667' }
        ],
        emailAddress: { emailAddr: 'pine@oldemail.com'}
    }
];
