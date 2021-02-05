import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'esPar'
})

export class EsParPipe implements PipeTransform{

  transform(value: any){
    var esPar = 'no es un numero par';

    if(value % 2 == 0){
      esPar = 'es un numero par';
    }
    return  'El año es: ' +value+ ' y ' +esPar;
  }
}
