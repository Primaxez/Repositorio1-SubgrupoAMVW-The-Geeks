import { DetallePago } from './DetallePago';
export class Suscripcion {
    estado: EstadoSuscripcion;
    detallePago: DetallePago;

    constructor(estado: EstadoSuscripcion, detallePago: DetallePago){
        this.estado = estado;
        this.detallePago = detallePago;
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