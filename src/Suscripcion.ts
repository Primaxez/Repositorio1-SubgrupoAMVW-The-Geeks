import { DetallePago } from './DetallePago';
export class Suscripcion {
    estado: EstadoSuscripcion;
    pagos: DetallePago[] = [];

    constructor(estado: EstadoSuscripcion, pagos: DetallePago[] = []){
        this.estado = estado;
        this.pagos = pagos;
    }

    agregarPago(detallePago: DetallePago) {
        this.pagos.push(detallePago);
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