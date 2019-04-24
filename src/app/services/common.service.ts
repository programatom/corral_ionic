import { Injectable } from '@angular/core';
import { URL_ASSETS } from 'src/config/config';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _sanitizer: DomSanitizer) { }

  processUrls(urls){
    let url_array_processed = [];
    urls.filter((value)=>{
      let url = URL_ASSETS + value;
      this._sanitizer.bypassSecurityTrustStyle('url('+ url +') no-repeat 100% 100%;')
      url_array_processed.push(url);
    });
    return url_array_processed;
  }
}
