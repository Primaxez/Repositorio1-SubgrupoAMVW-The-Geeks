"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallePago = void 0;
class DetallePago {
    constructor(estado, fechaPago, monto, metodo, cantDias) {
        this.estado = estado;
        this.fechaPago = fechaPago;
        this.monto = monto;
        this.metodo = metodo;
        this.cantDias = cantDias;
    }
    consultarEstado() {
        return this.estado;
    }
    aceptarDescuento(descuento) {
        descuento.AplicarDescuento(this);
    }
    pagarSuscripcion(metodoPago) {
        metodoPago.pagar(this.monto);
    }
}
exports.DetallePago = DetallePago;
