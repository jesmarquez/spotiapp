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
      'Authorization': 'Bearer BQC_x_urjpZYG1YzHM9oJb6Ix-jWacvUffAVeLfJFbrvb7810GA28iE_Pbm4W2OV09zlD9jJylU2iBSdtIU'
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

  getArtistas( termino: string ) {

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

  getArtista( id: string ) {
    
    return this.getQuery(`artists/${ id }`);
    /*
    .pipe( map ((data: any) =>  {
      return data['artists'].items;
    }));
    */
    /*
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
              .pipe( map ((data: any) => {
                return data['artists'].items;
              }));
    */
  }
  

  getTopTracks( id: string ) {
    
    return this.getQuery(`artists/${ id }/top-tracks/?country=us`)
      .pipe( map ((data: any) =>  {
      return data['tracks'];
    }));

    
    /*
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
              .pipe( map ((data: any) => {
                return data['artists'].items;
              }));
    */
  }
}
