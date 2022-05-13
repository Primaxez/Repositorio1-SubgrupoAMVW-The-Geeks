"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoSuscripcion = exports.Suscripcion = void 0;
class Suscripcion {
    constructor(estado, pagos = []) {
        this.pagos = [];
        this.estado = estado;
        this.pagos = pagos;
    }
    agregarPago(detallePago) {
        this.pagos.push(detallePago);
    }
    modificarSuscripcion(estado) {
        this.estado = estado;
    }
}
exports.Suscripcion = Suscripcion;
var EstadoSuscripcion;
(function (EstadoSuscripcion) {
    EstadoSuscripcion["ACTIVA"] = "ACTIVA";
    EstadoSuscripcion["SUSPENDIDA"] = "SUSPENDIDA";
    EstadoSuscripcion["CANCELADA"] = "CANCELADA";
})(EstadoSuscripcion = exports.EstadoSuscripcion || (exports.EstadoSuscripcion = {}));
