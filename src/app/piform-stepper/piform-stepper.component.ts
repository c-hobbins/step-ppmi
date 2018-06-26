import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cdn_provs, addr_types } from '../datamodels/seed-data-lovs';
import { Address } from '../datamodels/address';
import { Client } from '../datamodels/client';
import { PersonName } from '../datamodels/person-name';
import { PlaceOfBirth } from '../datamodels/place-of-birth';
import { DateOfBirth } from '../datamodels/date-of-birth';
import { Telephone, Email } from '../datamodels/person-contactInfo';

// import { Email, Telephone } from '../datamodels/person-contactInfo';

@Component({
  selector: 'app-piform-stepper',
  templateUrl: './piform-stepper.component.mat.html',
  styleUrls: ['./piform-stepper.component.css']
})

export class PiformStepperComponent implements OnInit {

  piNamesFG: FormGroup;
  piBioInfoFG: FormGroup;
  piContactInfoFG: FormGroup;
  piAddressFG: FormGroup;
  provs = cdn_provs;
  addrTypeLovs = addr_types;
  client = new Client();

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.piBioInfoFG = this.fb.group({
      eyeColor: ['', Validators.required],
      height: ['', Validators.required],
      gender: ['', Validators.required],
      pob: this.fb.group( new PlaceOfBirth('', '', '')),
      dob: this.fb.group( new DateOfBirth('', '', ''))}
    );
    this.piNamesFG = this.fb.group({
      primaryName: this.fb.group( new PersonName('Primary', '', '')),
      birthName: this.fb.group( new PersonName('Birth', '', '')),
      formerName: this.fb.group( new PersonName('Former', '', '')),
      maidenName: this.fb.group( new PersonName('Maiden', '', ''))
      });
    this.piAddressFG = this.fb.group({
      addresses: this.fb.array([])
    });
    this.piContactInfoFG = this.fb.group({
      homeTel: this.fb.group( new Telephone('Home', '')),
      otherTel: this.fb.group( new Telephone('Cell', '')),
      emailAddr: this.fb.group( new Email(''))
    });
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.piAddressFG.setControl('addresses', addressFormArray);
  }

  addAddress() {
    this.addresses.push(this.fb.group(new Address('', '', '', '', '', '', '', '')));
  }

  get addresses(): FormArray {
    return this.piAddressFG.get('addresses') as FormArray;
  }

  ngOnInit() {
    this.createForm();
  }

}
