import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {


  @Input() pelicula: Pelicula;
  @Output() Marcarfavorita = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  seleccionar(event, pelicula) {
    this.Marcarfavorita.emit({
      pelicula: pelicula
    });
  }
}
