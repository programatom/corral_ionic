import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-centro-genetico',
  templateUrl: './centro-genetico.page.html',
  styleUrls: ['./centro-genetico.page.scss'],
})
export class CentroGeneticoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irASemen(){
    this.navCtrl.navigateForward("tabs/centro-genetico/select")
  }

}
