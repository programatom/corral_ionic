import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss'],
})
export class DescripcionComponent implements OnInit {

  @Input("titulo")titulo;
  @Input("texto")texto;
  @Input("nombre")nombre;

  constructor() { }

  ngOnInit() {}

}
