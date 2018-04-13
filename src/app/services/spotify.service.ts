import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  artistas:any[]=[];

  constructor(public http:HttpClient) {
    console.log('servicio de spotify listo');
  }

  getArtistas() {
    let url = "https://api.spotify.com/v1/search?q=Franco%20Battiato&type=artist&market=US&limit=20";

    let headers=new HttpHeaders({
      'Authorization':'Bearer BQDsAU7p8FnjU5UgpOaCOnaSfqJZvy1JsJBJkzBCba3WgLQ4OGytnsrdHL-2tLwhHsN6-IRUj4B-ObyC_80'
    });

    return this.http.get(url,{headers:headers});

  }

}
