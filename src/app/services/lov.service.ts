import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LovService {

  constructor() { }

  getCountries(type: string) {
    return ['Canada', 'USA'];
  }

  getProvincesStates(country: string){
    return ['AB', 'BC', 'ON', 'QC', 'NB', 'MB', 'SK', 'NF', 'NS', 'PI', 'NV', 'YK', 'NT'];
  }

  getAddressTypes(){
    return ['Residence', 'Mailing', 'Other'];
  }
}
