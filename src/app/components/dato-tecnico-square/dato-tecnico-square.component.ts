import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dato-tecnico-square',
  templateUrl: './dato-tecnico-square.component.html',
  styleUrls: ['./dato-tecnico-square.component.scss'],
})
export class DatoTecnicoSquareComponent implements OnInit {

  @Input("dato")dato;
  @Input("nombre")nombre;
  @Input("background")background;

  constructor() { }

  ngOnInit() {}

}
