import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private clipboard: Clipboard,
              private toastServ: ToastService) { }

  ngOnInit() {
  }

  copy(copy){

    this.clipboard.copy(copy).then(()=>{
      this.toastServ.presentToast("Copiado!", 1000);
    });
  }

}
