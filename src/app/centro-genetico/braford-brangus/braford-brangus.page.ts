import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TorosService } from 'src/app/services/toros.service';

@Component({
  selector: 'app-braford-brangus',
  templateUrl: './braford-brangus.page.html',
  styleUrls: ['./braford-brangus.page.scss'],
})
export class BrafordBrangusPage implements OnInit {

  constructor(private navCtrl: NavController,
              private torosServ: TorosService) { }

  ngOnInit() {
  }

  switchNav(type){
    this.torosServ.selectedToroType = type;
    this.navCtrl.navigateForward("/toro-select");
  }

}
