import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from './restaurants';

@Injectable({
  providedIn: 'root'
})
// export class DataService {
//   apiUrl = 'https://api.yelp.com/v3/businesses/search?';
//    'Authorization: Bearer -Fc3Q2w2BXx5c2Gi0jk-aTVnOoUh-WoZwAf-qUpVxBEFevDS0H48I9nICKCuDd7F_OF0eanxrRu3P01hcFVuZSJOzRoCAVY_RKMMXEhRd65w-Moi8BzyLE1tL2SaXHYx'

//   constructor(private _http: HttpClient) { }

//   getRestaurants()
// {
//   return this._http.get<Restaurants[]>(this.apiUrl + '/name');
// }

//}

export class DataService {
  apiUrl = 'https://api.yelp.com/v3/businesses/search?limit=20&location=Roma&locale=it_IT&categories=indpak&term=restaurant';
   Authorization: 'Bearer-Fc3Q2w2BXx5c2Gi0jk-aTVnOoUh-WoZwAf-qUpVxBEFevDS0H48I9nICKCuDd7F_OF0eanxrRu3P01hcFVuZSJOzRoCAVY_RKMMXEhRd65w-Moi8BzyLE1tL2SaXHYx'

  constructor(private _http: HttpClient) { }

  getRestaurants()
{
  return this._http.get<Restaurants[]>(this.apiUrl);
}

}
