import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { SinfotoPipe } from '../../pipes/sinfoto.pipe';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino: string = '';
  artistas: any[] = [];

  constructor(public _spotify: SpotifyService) {

  }

  buscar() {
    if (this.termino.length > 1) {
      this._spotify.getArtistas(this.termino).subscribe(data => {
        this.artistas=data['artists'].items;
      });
    }

  }


  ngOnInit() {
  }

}
