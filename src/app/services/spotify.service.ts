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
      'Authorization': 'Bearer BQBqPOIVmMXKR_iIlaQvlvvvXC3Mcw3LprkMKeBH312acvrZ6WTfHbwr9Rf8z_wY4VOjL51mNZlexmzb8pA'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBqPOIVmMXKR_iIlaQvlvvvXC3Mcw3LprkMKeBH312acvrZ6WTfHbwr9Rf8z_wY4VOjL51mNZlexmzb8pA'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers });
  }
}
