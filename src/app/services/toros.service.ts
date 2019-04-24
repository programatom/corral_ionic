import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { URL_SERVICES } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class TorosService {

  selectedToro;
  selectedToroType;
  
  constructor(private httpServ:HttpService ) { }

  getTorosWhere(data){
    let url = URL_SERVICES + "toros";
    return this.httpServ.httpPost(url, data);
  }


}
