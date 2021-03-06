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
      'Authorization': 'Bearer BQB5U1GT79ggjEp3RT3_okOaGQwq04-y6HlXE5oJTeI5GKNNgfiVeJG1NfPoy6XLwSG3JIgSuu3R6TMCD1lhko7wvUYOMv9fk61MAXWGQABl5GW4C2fzWfNek49rGO6pwRQL_CNGRB4'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( data => {
        console.log(data);
      });
  }
}
