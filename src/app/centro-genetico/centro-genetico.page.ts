import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-centro-genetico',
  templateUrl: './centro-genetico.page.html',
  styleUrls: ['./centro-genetico.page.scss'],
})
export class CentroGeneticoPage implements OnInit {

  constructor(private navCtrl: NavController,
              private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  irASemen(){
    this.navCtrl.navigateForward("tabs/centro-genetico/select")
  }

  async toast(){
    let toast = await this.toastCtrl.create({
      message:"Sección en desarrollo!",
      duration: 800
    });
    toast.present();
  }

}
