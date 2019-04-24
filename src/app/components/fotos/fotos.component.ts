import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent implements OnInit {

  @Input("fotos") fotos;

  constructor() { }

  ngOnInit() {}

}
