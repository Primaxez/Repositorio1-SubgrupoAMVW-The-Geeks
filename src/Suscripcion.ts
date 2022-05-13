import { DetallePago } from './DetallePago';
export class Suscripcion {
    estado: EstadoSuscripcion;
    detallesPago: DetallePago[] = [];

    constructor(estado: EstadoSuscripcion){
        this.estado = estado;
    }

    addDetallePago(detalle_pago: DetallePago){
        this.detallesPago.push(detalle_pago);
    }

    modificarSuscripcion(estado: EstadoSuscripcion){
        this.estado = estado;
    }
}

export enum EstadoSuscripcion {

    ACTIVA = 'ACTIVA',
    SUSPENDIDA = 'SUSPENDIDA',
    CANCELADA = 'CANCELADA'
}