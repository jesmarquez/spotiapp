import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotify : SpotifyService ) { 
    this.loading = false;
  }

  

  buscar(termino: string ) {
    this.loading = true;
    
    console.log(termino);
    this.spotify.getArtista( termino )
        .subscribe( (data: any) => {
          // console.log(data.artists.items);
          this.artistas = data;
          this.loading = false;
        });
  }

}
