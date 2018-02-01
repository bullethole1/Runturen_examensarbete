import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlickrProvider {
  getApiUrl : string = "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=554863d13e40cf56f98818113f4a05bc&user_id=152375700%40N05&format=json&nojsoncallback=1";    
  
  constructor(public http: Http) {
    console.log('Hello FlickrProvider Provider');
  }

  //function to return the api information
  getPosts()
  {
    return this.http.get(this.getApiUrl)
    .map((res => res.json()));
  }  
}
