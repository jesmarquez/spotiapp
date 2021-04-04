import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('spotify services!');

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC2z4ip5ASZApHYfSQu0V_bdFmx6HJpKGV8mjeyjQV3PAHFQt9MWdPIBV0BW4H58hN894jCllGopPpHf3A'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    /*
    return this.http.get('https://api.spotify.com/v1/browse/new-releases')
            .pipe( map (data =>  {
              return data['albums'].items;
            }));
            */
  }

  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC2z4ip5ASZApHYfSQu0V_bdFmx6HJpKGV8mjeyjQV3PAHFQt9MWdPIBV0BW4H58hN894jCllGopPpHf3A'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers });
  }
}
