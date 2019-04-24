import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-columna-dep',
  templateUrl: './columna-dep.component.html',
  styleUrls: ['./columna-dep.component.scss'],
})
export class ColumnaDepComponent implements OnInit {

  @Input("titulo")titulo;
  @Input("dato_dep")dato_dep;
  @Input("dato_prc")dato_prc;
  @Input("isFirst")isFirst;


  constructor() { }

  ngOnInit() {}

}
