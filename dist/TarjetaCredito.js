"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarjetaCredito = void 0;
class TarjetaCredito {
    constructor(nroTarjeta, cvv, nombreTarjeta) {
        this.nroTarjeta = nroTarjeta;
        this.cvv = cvv;
        this.nombreTarjeta = nombreTarjeta;
    }
    pagar(monto) {
        console.log("Se ha pagado correctamente con la Tarjeta de Credito");
    }
}
exports.TarjetaCredito = TarjetaCredito;
let card1 = new TarjetaCredito(5899415735468965, 658, "Vicente Mirabal");
card1.pagar(16);
