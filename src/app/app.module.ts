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

import { CartPage } from '../pages/cart/cart';
import { CategoriesPage } from '../pages/categories/categories';
import { CheckoutPage } from '../pages/checkout/checkout';
import { ItemPage } from '../pages/item/item';
import { OrderCompleteModalPage } from '../pages/order-complete-modal/order-complete-modal';
import { ProductsPage } from '../pages/products/products';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlickrProvider } from '../providers/flickr/flickr';
import { BraintreeProvider } from '../providers/braintree/braintree';
import { ConfigurationService } from '../providers/configuration-service';
import { IonicStorageModule } from '@ionic/storage'


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
    CartPage,
    CategoriesPage,
    CheckoutPage,
    ItemPage,
    OrderCompleteModalPage,
    ProductsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

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
    CartPage,
    CategoriesPage,
    CheckoutPage,
    ItemPage,
    OrderCompleteModalPage,
    ProductsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlickrProvider, BraintreeProvider, ConfigurationService
  ]
})
export class AppModule {}
