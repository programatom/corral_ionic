import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private clipboard: Clipboard) { }

  ngOnInit() {
  }

  copy(copy){
    this.clipboard.copy(copy);
  }

}
