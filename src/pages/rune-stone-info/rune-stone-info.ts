import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the RuneStoneInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rune-stone-info',
  templateUrl: 'rune-stone-info.html',
})
@Injectable()
export class RuneStoneInfoPage {
  text: string;
  location: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.jsFunctions();
  }

  //function to display the text slowly
  jsFunctions()
  {
    $(".controlText").click(function(){
      $(".textSection").toggle("slow");
  });
  }
}
