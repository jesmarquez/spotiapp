import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any[] = [];

  constructor( private spotify:SpotifyService ) {

    this.spotify.getNewReleases()
      .subscribe( (data: any)  => {
        console.log(data.albums);

        this.nuevasCanciones = data.albums.items;

        console.log(this.nuevasCanciones);
      });
   }

  ngOnInit(): void {
  }

}
