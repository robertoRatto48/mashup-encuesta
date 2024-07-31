import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }


  getHeadersC4C(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Basic ` + btoa(environment.usuarioC4C + ':' + environment.claveC4C),
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization',
      'x-csrf-token': 'Fetch'
    });
  }

  getRequest(source: string) {
    console.log('header:',this.getHeadersC4C())
    return this.http.get(source, { headers: this.getHeadersC4C(), observe: 'body' });
  }

}
