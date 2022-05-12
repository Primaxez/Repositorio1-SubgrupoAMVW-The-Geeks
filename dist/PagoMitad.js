"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagoMitad = void 0;
class PagoMitad {
    AplicarDescuento(detallepago) {
        detallepago.monto = detallepago.monto * 0.5;
    }
}
exports.PagoMitad = PagoMitad;
