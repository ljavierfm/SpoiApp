import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQAcDV7SsOxz1yOh_y6-REcENdoSkbkI23rLN5KpgDZWp8b9SaArKlewqyck6GLm_QB7XmKKshshMqge-t4';


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

    return this.http.get(url, { headers: this.getHeaders() });
  }

  getArtista(id: string) {

    let url: string = `${this.urlSpotify}artists/${id}`;

    return this.http.get(url, { headers: this.getHeaders() });
  }

  getTopTracks(id: string) {
    let url: string = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;

    return this.http.get(url,{headers:this.getHeaders()}).map((resp:any)=>{
      console.log(resp);
      return this.topTracks = resp.tracks;
    }
  );
  }


}


