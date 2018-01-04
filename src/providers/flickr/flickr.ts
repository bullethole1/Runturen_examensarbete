import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlickrProvider {
  getApiUrl : string = "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=e07254bcad2ef73f42095bad04366579&user_id=152375700%40N05&format=json&nojsoncallback=1&auth_token=72157691682579445-a8aab774f49291f1&api_sig=a0ed97ae758e20d7c603d7ed76bf36ab";    
  
  constructor(public http: Http) {
    console.log('Hello FlickrProvider Provider');
  }

  getPosts()
  {
    return this.http.get(this.getApiUrl)
    .map((res => res.json()));
  }  
}
