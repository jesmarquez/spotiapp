import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  loadingArtist: boolean;


  constructor( private router: ActivatedRoute,
                private spotify: SpotifyService ) { 

    this.loadingArtist = true;

    this.router.params.subscribe( params => {
      console.log(params.id);
      this.getArtista(params.id);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.loadingArtist = true;

    this.spotify.getArtista( id )
      .subscribe( artista => {
          this.artista = artista;
          console.log(artista);
          this.loadingArtist = false;
      });
  }
}
