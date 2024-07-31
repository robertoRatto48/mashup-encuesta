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
  getHeadersTokenWithBasicAuth(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic c2ItZTI5MjhjNWUtM2FmYy00NmEzLThlZjYtZjBhMjNiNDU5MTA4IWIzMDg3fGl0LXJ0LWJ0cC1icmFuY2EtcWFzIWIxMDY6NmEzMzRkZDQtYWUyMy00NzA4LWJiNTYtNjkzMWY0YzIxNzJlJDRsOFNZMlpiTXhzcjRsMDNVRFlxODJXc3dzYk84dlN1dmpJR2hmRkxsWHc9'
    });
  }

  getRequest(source: string) {
    console.log('header:',this.getHeadersC4C())
    return this.http.get(source, { headers: this.getHeadersTokenWithBasicAuth(), observe: 'body' });
  }

}
