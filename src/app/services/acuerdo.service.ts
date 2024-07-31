// src/app/services/acuerdo.service.ts
import { Injectable } from '@angular/core';
import { Acuerdo } from '../models/acuerdo.model';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class AcuerdoService {
  constructor( private requestService: RequestService) {}

  getAcuerdo(): Acuerdo {
    return {
      resumen:[
        {
          title:"Merc sin cargo",
          pago:100,
          cuotas: 4,
          total: 400,
          objetivo: 0,
          eventos: 150
        },
        {
          title:"Fee",
          pago: 100,
          cuotas: 4,
          total: 400,
          objetivo: 0,
          eventos: 150
        },
        {
          title:"Objetivo",
          pago: 100,
          cuotas: 4,
          total: 400,
          objetivo: 0,
          eventos: 150
        },
        {
          title:"Eventos",
          pago: 100,
          cuotas: 4,
          total: 400,
          objetivo: 0,
          eventos: 150
        }
      ],
      pagos: [
        { numCuota: 1, tipo: 'Merc sin cargo', fechaCuota: '5/1/2023', codigo: '110114', producto: 'FERNET BRANCA 6/100 CL. 39°', cantidad: 100, objetivo: '' },
        { numCuota: 2, tipo: 'Merc sin cargo', fechaCuota: '8/1/2023', codigo: '110114', producto: 'FERNET BRANCA 6/100 CL. 39°', cantidad: 100, objetivo: '' },
        { numCuota: 3, tipo: 'Merc sin cargo', fechaCuota: '11/1/2023', codigo: '110114', producto: 'FERNET BRANCA 6/100 CL. 39°', cantidad: 100, objetivo: '' },
        { numCuota: 4, tipo: 'Merc sin cargo', fechaCuota: '2/1/2024', codigo: '110114', producto: 'FERNET BRANCA 6/100 CL. 39°', cantidad: 100, objetivo: '' },
        { numCuota: 5, tipo: 'Merc sin cargo', fechaCuota: '11/1/2023', codigo: '110114', producto: 'FERNET BRANCA 6/100 CL. 39°', cantidad: 50, objetivo: 'Evento Realizado' },
        { numCuota: 6, tipo: 'Merc sin cargo', fechaCuota: '12/1/2023', codigo: '110114', producto: 'FERNET BRANCA 6/100 CL. 39°', cantidad: 50, objetivo: 'Evento Realizado' },
        { numCuota: 7, tipo: 'Merc sin cargo', fechaCuota: '1/1/2024', codigo: '110114', producto: 'FERNET BRANCA 6/100 CL. 39°', cantidad: 50, objetivo: 'Evento Realizado' }
      ],
      periodo: {
        desde: 'Mayo 2023',
        hasta: 'Abril 2024'
      },
      competencia: [
        { categoria: 'VODKA', empresa: 'PERNOD RICARD', marca: 'ABSOLUT', tipo: '' },
        { categoria: 'VERMOUTH', empresa: '', marca: '', tipo: '' },
        { categoria: 'WHISKY', empresa: 'PERNOD RICARD', marca: 'J WALKER', tipo: '' },
        { categoria: 'GIN', empresa: 'PERNOD RICARD', marca: 'BRIGHTON', tipo: '' },
        { categoria: 'RON', empresa: '', marca: '', tipo: '' },
        { categoria: 'CERVEZA', empresa: 'CCU', marca: '', tipo: '' }
      ]
    };
  }

  getTest( callback?:any){

    var source=`https://btp-branca-qas.it-cpi008-rt.cfapps.br10.hana.ondemand.com/http/carta_oferta_QAS`;
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
