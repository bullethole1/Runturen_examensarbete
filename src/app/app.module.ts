import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { GalleryPage } from '../pages/gallery/gallery';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';
import { RuneStoneInfoPage } from '../pages/rune-stone-info/rune-stone-info';
import { StorePage } from '../pages/store/store';
import { PayPage } from '../pages/pay/pay';


import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlickrProvider } from '../providers/flickr/flickr';

@NgModule({
  declarations: [
    GalleryPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GoogleMapsPage,
    RuneStoneInfoPage,
    StorePage,
    PayPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GalleryPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GoogleMapsPage,
    RuneStoneInfoPage,
    StorePage,
    PayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    FlickrProvider
  ]
})
export class AppModule {}
