import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  dataFull : any[] = [];
  nuevasCanciones : any[] = [];

  constructor( private spotify:SpotifyService ) {

    this.spotify.getNewReleases()
      .subscribe( data => {
        // console.log(data);
        this.dataFull.push(data);
        this.nuevasCanciones = this.dataFull[0].albums.items;
        console.log(this.nuevasCanciones);
      });
   }

  ngOnInit(): void {
  }

}
