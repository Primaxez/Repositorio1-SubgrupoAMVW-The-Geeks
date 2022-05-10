"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallePago = void 0;
const PagoMensual_1 = require("./PagoMensual");
const PagoAnual_1 = require("./PagoAnual");
const TarjetaCredito_1 = require("./TarjetaCredito");
const Paypal_1 = require("./Paypal");
class DetallePago {
    constructor(estado, fechaPago, monto, modalidad, metodo) {
        this.estado = estado;
        this.fechaPago = fechaPago;
        this.monto = monto;
        this.modalidad = modalidad;
        this.metodo = metodo;
    }
    consultarEstado() {
        return this.estado;
    }
}
exports.DetallePago = DetallePago;
var EstadoPago;
(function (EstadoPago) {
    EstadoPago["Vencido"] = "VENCIDO";
    EstadoPago["Rechazado"] = "RECHAZADO";
    EstadoPago["Aprobado"] = "APROBADO";
})(EstadoPago || (EstadoPago = {}));
let formapago2 = new PagoMensual_1.PagoMensual(1);
let formapago3 = new PagoAnual_1.PagoAnual(6);
let metodopago1 = new TarjetaCredito_1.TarjetaCredito(5899415735468965, 658, "Vicente Mirabal");
let metodopago2 = new Paypal_1.Paypal("vicente@Paypal.com", "Vicente", "Mirabal");
let pago = new DetallePago(EstadoPago.Vencido, "16-11-2000", 15600, formapago3, metodopago2);
console.log(pago);
