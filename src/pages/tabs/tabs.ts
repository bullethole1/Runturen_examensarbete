import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { GoogleMapsPage } from '../google-maps/google-maps';
import { GalleryPage } from '../gallery/gallery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = GoogleMapsPage;
  tab5Root = GalleryPage;



  constructor() {

  }
}