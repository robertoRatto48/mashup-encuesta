import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  constructor( private requestService: RequestService) {}


  getTest( callback?:any){

    var source=`https://cpi-trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com/cpi-trial/encuesta`;
    const cb = callback || (() => {});

    return new Promise((resolve, reject) => {
      this.requestService.getRequest(source)
      .subscribe(data  => {
        resolve(data);
      },
      error  => {
        reject(error);
        return cb(error);
      });
    });
  }

}
