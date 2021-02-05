import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';


Injectable()
export class PeliculaService {

  public peliculas: Pelicula[];

  constructor(){
    this.peliculas = [
      new Pelicula('Spiderman 4', 2018, '../../../assets/images/Spiderman.jpeg'),
      new Pelicula('Los vengadores', 2017, '../../../assets/images/los-vengadores-contra-thanos-en-infinity-war.jpg'),
      new Pelicula('Batman vs Superman', 2015, '../../../assets/images/Batman_v_Superman_El_amanecer_de_la_Justicia-728293826-large.jpg' ),
      new Pelicula('WonderWoman', 2020, '../../../assets/images/Wonder_Woman_1984-686758013-large.jpg' )
    ]
  }

  holaMundo(){
    return 'hola mundo desde el servicio de Angular';
  }

  getPeliculas(){
    return this.peliculas;
  }
}
