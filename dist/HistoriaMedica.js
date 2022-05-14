"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoriaMedica = void 0;
class HistoriaMedica {
    constructor(registros = []) {
        this.registros = [];
        this.registros = registros;
    }
    agregarRegistro(registro) {
        this.registros.push(registro);
    }
}
exports.HistoriaMedica = HistoriaMedica;
