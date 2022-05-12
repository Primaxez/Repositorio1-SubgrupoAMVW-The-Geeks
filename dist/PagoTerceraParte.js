"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagoTerceraParte = void 0;
class PagoTerceraParte {
    AplicarDescuento(detallepago) {
        detallepago.monto = detallepago.monto * (1 / 3);
    }
}
exports.PagoTerceraParte = PagoTerceraParte;
