"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallePago = void 0;
const TarjetaCredito_1 = require("./TarjetaCredito");
const Paypal_1 = require("./Paypal");
const PagoMitad_1 = require("./PagoMitad");
const PagoTerceraParte_1 = require("./PagoTerceraParte");
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
var EstadoPago;
(function (EstadoPago) {
    EstadoPago["Vencido"] = "VENCIDO";
    EstadoPago["Rechazado"] = "RECHAZADO";
    EstadoPago["Aprobado"] = "APROBADO";
})(EstadoPago || (EstadoPago = {}));
let metodopago1 = new TarjetaCredito_1.TarjetaCredito(5899415735468965, 658, "Vicente Mirabal");
let metodopago2 = new Paypal_1.Paypal("vicente@Paypal.com", "Vicente", "Mirabal");
let pago = new DetallePago(EstadoPago.Vencido, "16-11-2000", 15600, metodopago2, 30);
console.log(pago);
let Descuento1 = new PagoMitad_1.PagoMitad();
let Descuento2 = new PagoTerceraParte_1.PagoTerceraParte();
pago.aceptarDescuento(Descuento1);
console.log(pago);
pago.aceptarDescuento(Descuento2);
console.log(pago);
