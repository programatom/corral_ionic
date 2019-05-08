import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ToastService } from 'src/app/services/toast.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-data-entry-modal',
  templateUrl: './data-entry-modal.page.html',
  styleUrls: ['./data-entry-modal.page.scss'],
})
export class DataEntryModalPage implements OnInit {

  dataArray:Array<any>;
  type;
  buttonText;
  inputObject = new Object as any;
  subject;
  toro;
  constructor(private emailComposer: EmailComposer,
              private toastServ: ToastService,
              private localStorageServ: LocalStorageService) { }

  ngOnInit() {

    this.inputObject["toro"] = this.toro;

    Object.keys(this.localStorageServ.localStorageObj).filter((key)=>{
      this.inputObject[key] = this.localStorageServ.localStorageObj[key];
    })
    switch (this.type){
      case "cotizacion":
      this.buttonText = "PEDIR COTIZACION";
      this.subject = "Pedido de cotización de " + this.toro;
      break;
      case "pedido":
      this.buttonText = "REALIZAR PEDIDO";
      this.subject = "Pedido de " + this.toro;
      break;
    }
  }
  validateGenerateBodyAndSaveUserData(){

    let body:any = "";
    let userDataArray = ["razon_social", "telefono" , "cuit" , "email"];
    let errorMsg = "";
    this.dataArray.filter((object)=>{
      let varName = object.variableName;
      let displayName = object.displayName;
      if(this.inputObject[varName] == undefined || this.inputObject[varName] == ""){
        errorMsg = "El campo " + displayName + " es requerido!";
      }else{
        if(userDataArray.includes(varName)){
          this.localStorageServ.insertAndInstantiateValue(varName, this.inputObject[varName]);
        }
        body = body + displayName + ": " + this.inputObject[varName] + "\n"
      }
    });
    if(errorMsg != ""){
      body = false;
      this.toastServ.presentToast(errorMsg , 3000);
    }
    return body;
  }

  sendEmail(){
    let body:any = this.validateGenerateBodyAndSaveUserData();
    if(body == false){
      return;
    }
    let email = {
      cc: 'ffoster@bellamar.com.ar',
      to: 'garcia@bellamar.com.ar',
      subject: this.subject,
      body: body,
      isHtml: true
    }
    // Send a text message using default options
    this.emailComposer.open(email);
  }

}
