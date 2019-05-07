import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TorosService } from 'src/app/services/toros.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-toro-select',
  templateUrl: './toro-select.page.html',
  styleUrls: ['./toro-select.page.scss'],
})
export class ToroSelectPage implements OnInit {

  toros = [];
  type;
  constructor(private navCtrl: NavController,
              private torosServ: TorosService,
              private commonServ: CommonService) { }

  ionViewWillEnter(){
    this.type = this.torosServ.selectedToroType;
  }
  ngOnInit() {
    let type;
    if(this.torosServ.selectedToroType == "BRANGUS"){
      type = 2;
    }else{
      type = 1;
    }
    this.torosServ.getTorosWhere({
      "type": type
    }).subscribe((respuesta)=>{
      console.log(respuesta);
      this.toros = respuesta.data;
      this.processUrls();
    })
  }
  processUrls(){
    for(let i = 0; i < this.toros.length; i ++){
      let mediaObj = this.toros[i].media;
      let mediaKeys = Object.keys(mediaObj);
      for(let j = 0; j < mediaKeys.length; j ++){
        let key = mediaKeys[j];
        let arrayOfUrls:Array<any> = mediaObj[key];
        this.toros[i].media[key] = this.commonServ.processUrls(arrayOfUrls);
      }
    }
  }

  goBack(){

    this.navCtrl.navigateBack("/tabs/centro-genetico/select");
  }

  irAToro(toro){
    this.torosServ.selectedToro = toro;
    this.navCtrl.navigateForward("/toro-data");
  }

}
