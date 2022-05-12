export class Suscripcion {
    estado: EstadoSuscripcion;

    constructor(estado: EstadoSuscripcion){
        this.estado = estado;
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