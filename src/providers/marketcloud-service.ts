import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

declare var Marketcloud: any;

import '../../node_modules/marketcloud-js/dist/marketcloud.min';

/*
  Generated class for the MarketcloudService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MarketcloudService {

  client:any;

  utils:any;

  constructor() {

    // Here we create an instance of the client
    // Since this Service is created once
    // we will not have to re-create other instances of the client.

    this.client = new Marketcloud.Client({
      publicKey : '8b036357-f3d3-4d20-8c08-c90c4d31be61'// REPLACE WITH YOUR PUBLIC KEY
    });
    // test key f84af487-a315-42e6-a57a-d79296bd9d99
    //8b036357-f3d3-4d20-8c08-c90c4d31be61 my public key

    this.utils = Marketcloud.Utils;

  }

}
