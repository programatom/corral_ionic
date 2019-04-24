import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }
  httpGet(url: string, token?:string): Observable<any> {

    const headerDict = {
      'Accept': 'application/json',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(url, requestOptions)
      .pipe(
        map((respuesta: any) => {
          return respuesta;
        })
      );
  }

  httpPost(url: string, data:any ,token?:string, content_type?:string): Observable<any> {
    var headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };


    return this.http.post(url, data ,requestOptions)
      .pipe(
        map((respuesta: any) => {
          return respuesta;
        })
      );
  }

}
