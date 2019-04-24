import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { URL_SERVICES } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class RemateService {

  constructor(private http: HttpService) { }

  browsePath(data:{
    "path"
    "sub_dir_array"
  }){
    let url = URL_SERVICES + "browsePath";
    return this.http.httpPost(url, data);
  }

  lastRemate(){
    let url = URL_SERVICES + "activeRemate";
    return this.http.httpGet(url);
  }
}
