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
      'Authorization': 'Bearer BQCrMpDye1XFJ_XNUP1kO7g0L4fYVuufgiM1VhcdbUrEC4044MgviVcMGjt-tkcXWUDaZMYasLJA6_rpG-Y'
    });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
            .pipe( map ((data: any) =>  {
              return data['albums'].items;
            }));
            
  }

  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCrMpDye1XFJ_XNUP1kO7g0L4fYVuufgiM1VhcdbUrEC4044MgviVcMGjt-tkcXWUDaZMYasLJA6_rpG-Y'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
              .pipe( map ((data: any) => {
                return data['artists'].items;
              }));
  }
}
