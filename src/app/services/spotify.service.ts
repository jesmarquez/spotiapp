import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('spotify services!');

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCArroERjiNA0wLfTmV6Jzm9wjWXuWaX8gQaf_5hScXIzQ--F83HhTrBaTgyt2iqCFOKhrHUtH_W4P0dEU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }
}
