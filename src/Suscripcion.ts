import { DetallePago } from './DetallePago';
export class Suscripcion {
    estado: EstadoSuscripcion;
    detallesPago: DetallePago[];

    constructor(estado: EstadoSuscripcion, detallesPago: DetallePago[]){
        this.estado = estado;
        this.detallesPago= detallesPago;
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