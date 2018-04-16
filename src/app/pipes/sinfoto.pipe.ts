import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {

    let noImagen: string ='assets/img/noimage.png';
    if(!imagenes)
    {
      return noImagen;
    }

    return(imagenes.length>0)?imagenes[1].url:noImagen;
  }

}
