import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPage } from '../pay/pay';

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPage = PayPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }


}
