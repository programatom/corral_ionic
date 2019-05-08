import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  async presentToast(mensaje, tiempo?) {
  if(tiempo == undefined){
    tiempo = 3000;
  }
  const toast = await this.toastCtrl.create({
    message: mensaje,
    position: 'top',
    duration: tiempo,
    showCloseButton: true,
    closeButtonText: 'Cerrar',
    cssClass: "success"
  });
  toast.present();
}
}
