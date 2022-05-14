"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paypal = void 0;
class Paypal {
    constructor(correo, nombre, apellido) {
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    pagar(monto) {
        console.log("Se ha pagado correctamente con Paypal");
        return true;
    }
}
exports.Paypal = Paypal;
let cuenta1 = new Paypal("vicente@Paypal.com", "Vicente", "Mirabal");
cuenta1.pagar(30);
