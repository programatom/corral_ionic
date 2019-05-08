import { Component, OnInit, Inject } from '@angular/core';
import { TorosService } from 'src/app/services/toros.service';
import { DOCUMENT } from '@angular/platform-browser';
import { NavController, ModalController } from '@ionic/angular';
import { DataEntryModalPage } from '../data-entry-modal/data-entry-modal.page';

@Component({
  selector: 'app-toro-data',
  templateUrl: './toro-data.page.html',
  styleUrls: ['./toro-data.page.scss'],
})
export class ToroDataPage implements OnInit {

  toro;
  ids = ["observaciones" , "fotos" , "ficha" , "videos"];
  selectedView = "observaciones";
  selectedTitulo:string;
  selectedTexto:string;


  constructor(public torosServ: TorosService,
              @Inject(DOCUMENT) private document: Document,
              private navCtrl: NavController,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.toro = this.torosServ.selectedToro;
    Object.keys(this.toro).filter((key)=>{
      if(this.toro[key] == null){
        this.toro[key] = "";
      }
    });
    console.log(this.toro);
    this.switchView("observaciones");
  }

  async enterData(type){
    const dataNeeded = {
      "cotizacion":[
        {
          "displayName":"Toro",
          "variableName":"toro",
        },
        {
          "displayName":"Cantidad",
          "variableName":"cantidad",
        }
      ],
      "pedido":[
        {
          "displayName":"Razón social",
          "variableName":"razon_social",
        },
        {
          "displayName":"Toro",
          "variableName":"toro",
        },
        {
          "displayName":"Cantidad",
          "variableName":"cantidad",
        },
        {
          "displayName":"CUIT",
          "variableName":"cuit",
        },
        {
          "displayName":"Mail",
          "variableName":"email",
        },
        {
          "displayName":"Teléfono",
          "variableName":"telefono",
        }
      ]
    }
    const modal = await this.presentModal(dataNeeded[type], type);
    modal.present();
  }

  async presentModal(dataArray, type){
    return this.modalCtrl.create({
      component: DataEntryModalPage,
      cssClass: 'modal-email-friend',
      backdropDismiss: true,
      componentProps: {
        dataArray: dataArray,
        type: type,
        toro: this.toro.nombre
      }
    });
  }


  dismiss(){
    this.navCtrl.navigateBack("/toro-select")
  }

  switchView(view){
    this.selectedView = view;
    this.htmlLogic(view);
    this.processDescripcion()
  }

  processDescripcion(){
    let descripcion = this.toro.descripcion;
    let descripcionSplit = descripcion.split("≈");
    this.selectedTitulo = descripcionSplit[0];
    this.selectedTexto = descripcionSplit[1];
    return;
  }

  htmlLogic(view){
    for(let i = 0; i < this.ids.length; i ++){
      let id = this.ids[i];
      this.document.getElementById(id).classList.remove("active");
    }
    this.document.getElementById(view).classList.add("active");
    return;
  }

}
