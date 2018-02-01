import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ConfigurationService {

  // Declared as any for the sake of simplicity
  data:any = {};

  constructor() {
  }

  set(key,value) {
  	this.data[key] = value;
  }

  get(key) {
  	return this.data[key];
  }



}
