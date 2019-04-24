import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-data-entry-modal',
  templateUrl: './data-entry-modal.page.html',
  styleUrls: ['./data-entry-modal.page.scss'],
})
export class DataEntryModalPage implements OnInit {

  dataArray;
  type;
  buttonText;
  inputObject = new Object as any;
  subject;
  toro;
  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {
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
  generateBody(){
    let keys = Object.keys(this.inputObject);
    let body = "";
    keys.filter((key)=>{
      body = body + key.toUpperCase() + ": " + this.inputObject[key] + "\n"
    });

    return body;
  }

  sendEmail(){
    let body = this.generateBody();
    console.log(body);
    let email = {
      to: 'max@mustermann.de',
      subject: this.subject,
      body: body,
      isHtml: true
    }
    // Send a text message using default options
    this.emailComposer.open(email);
  }

}
