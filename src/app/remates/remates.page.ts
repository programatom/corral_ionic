import { Component, OnInit } from '@angular/core';
import { RemateService } from '../services/remate.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-remates',
  templateUrl: './remates.page.html',
  styleUrls: ['./remates.page.scss'],
})
export class RematesPage implements OnInit {

  remateData = new Object as{
    "dia"
    "fecha"
    "mes"
    "ubicacion"
    "subtitulo"
    "hora_almuerzo"
    "hora_ventas"
    "mensaje_adicional"
    "rematador"
  };
  mediaObject = new Object () as any;
  slideOpts1;
  slideOpts2;


  constructor(private remateServ: RemateService,
              private commonServ: CommonService) {
                this.mediaObject.video = [];
                this.slideOpts1 = {
                  "autoplay":{
                    "delay":5000
                  },
                  "loop":true
                }
                this.slideOpts2 = {
                  "autoplay":{
                    "delay":6000
                  },
                  "loop":true
                }
              }

  ngOnInit() {
    this.remateServ.lastRemate().subscribe((respuesta)=>{
      console.log(respuesta);
      this.remateData = respuesta.data;
      let remate_id = respuesta.data.id;
      let sub_dir_array = [
        "fotos_toros",
        "fotos_hembras",
        "video"
      ];
      this.remateServ.browsePath({
        "path":"remates/remate_"+ remate_id + "/",
        "sub_dir_array":sub_dir_array
      }).subscribe((respuesta)=>{
        let urls = respuesta.data;
        sub_dir_array.filter((value)=>{
          this.mediaObject[value] = this.commonServ.processUrls(urls[value]);
        });
        console.log(this.mediaObject);
      })
    })
  }

}
