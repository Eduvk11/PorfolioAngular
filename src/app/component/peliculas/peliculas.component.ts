import { Component, OnInit, DoCheck } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck {

  public titulo: string;
  public peliculas: Pelicula [];
  public favorita: Pelicula;
  public fecha: any;

  constructor(private _peliculaService: PeliculaService) {

    this.titulo = "Componente peliculas";

    this.peliculas = this._peliculaService.getPeliculas();

    this.fecha = new Date(2020, 1, 17);
  }

  ngOnInit(): void {
    console.log(this._peliculaService.holaMundo())
    console.log(this.peliculas)
    console.log('Componente ineciado');
  }

  ngDoCheck() {
    console.log('DOCHECK LANZADO');
  }

  cambiarTitulo() {

  }

  mostrarFavorita(event){
   this.favorita = event.pelicula;
  }

}
