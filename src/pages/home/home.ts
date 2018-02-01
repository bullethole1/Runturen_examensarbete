import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { GalleryPage } from '../gallery/gallery';
import { GoogleMapsPage } from '../google-maps/google-maps';
import { ProductsPage } from '../products/products';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad(){
    //console.log(this.mapRef);
    this.showMap();
  }

  //Function to navigate to various pages
  showMap()
  {
    var classRef = this;
    $(".aboutRef").click(function(){
      classRef.navCtrl.push(AboutPage);
    });
    $(".galleryRef").click(function(){
      classRef.navCtrl.push(GalleryPage); 
    });
    $(".mapRef").click(function(){
      classRef.navCtrl.push(GoogleMapsPage); 
    });
    $(".storeRef").click(function(){
      classRef.navCtrl.push(ProductsPage); 
    });
  }

}
