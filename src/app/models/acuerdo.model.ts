// src/app/models/acuerdo.model.ts
export interface Pago {
    numCuota: number;
    tipo: string;
    fechaCuota: string;
    codigo: string;
    producto: string;
    cantidad: number;
    objetivo: string;
}

export interface Resumen {
    title:string;
    pago: number;
    cuotas: number;
    total: number;
    objetivo: number;
    eventos: number;
}
export interface Acuerdo {
    resumen: Resumen[];
    pagos: Pago[];
    periodo: {
        desde: string;
        hasta: string;
    };
    competencia: {
        categoria: string;
        empresa: string;
        marca: string;
        tipo: string;
    }[];
}
  