import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQC2I3q-IvmrC1d-FzLs-v30fxBHEDPW-VVVVtXrPU8xgl7NB8dq2WjaHT8-61oF5DqnVn5jUlaDFB9o_Vg';

  artistas: any[] = [];
  topTracks:any[]=[];

  constructor(public http: HttpClient) {
    console.log('servicio de spotify listo');
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return headers;
  }

  getArtistas(termino: string) {

    let url: string = `${this.urlSpotify}search?q=${termino}&type=artist&market=US&limit=20`;

    return this.http.get(url, { headers: this.getHeaders() }).map((resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    }
    )

  }

  getArtista(id: string) {

    let url: string = `${this.urlSpotify}artists/${id}`;

    return this.http.get(url, { headers: this.getHeaders() });
  }

  getTopTracks(id: string) {
    let url: string = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;
    console.log(url);

    return this.http.get(url,{headers:this.getHeaders()}).map((resp:any)=>{
      return this.topTracks=resp;
    }
  );
  }


}


