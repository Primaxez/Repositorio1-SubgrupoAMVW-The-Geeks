"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorReferenciado = void 0;
const Valor_1 = require("./Valor");
class ValorReferenciado extends Valor_1.Valor {
    constructor(nombre, unidad_medida, referencia_minimo, referencia_maximo) {
        super(nombre, unidad_medida);
        this.referencia_minimo = referencia_minimo;
        this.referencia_maximo = referencia_maximo;
    }
}
exports.ValorReferenciado = ValorReferenciado;
