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

  constructor(public _spotify: SpotifyService) {

  }

  buscarArtista() {
    if (this.termino.length > 1) {
      this._spotify.getArtistas(this.termino).subscribe(resp => {
      });
    }

  }


  ngOnInit() {
  }

}
