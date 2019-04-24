import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
})
export class FichaComponent implements OnInit {

  @Input("nombre")nombre;
  @Input("toro")toro;
  constructor() { }

  ngOnInit() {
    console.log(this.toro);
  }

}
