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

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAASCcWZy8do1vpAYQ4PGBRoIstBLCveH5MpB_yAq0EkRyQfJA_jafh4Mkfd3mGXKHvIu5c4DbNGDfyvgA'
    });

    return this.http.get(url, { headers });
  }
  getNewReleases() {

    
    return this.getQuery('browse/new-releases')
      .pipe( map ((data: any) =>  {
        return data['albums'].items;
      }));


    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    /*
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
            .pipe( map ((data: any) =>  {
              return data['albums'].items;
            }));
    */
            
  }

  getArtista( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist`)
    .pipe( map ((data: any) =>  {
      return data['artists'].items;
    }));
    /*
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
              .pipe( map ((data: any) => {
                return data['artists'].items;
              }));
    */
  }
}
