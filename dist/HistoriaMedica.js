"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoriaMedica = void 0;
class HistoriaMedica {
    constructor() {
        this.registros = [];
    }
    agregarRegistro(registro) {
        this.registros.push(registro);
    }
}
exports.HistoriaMedica = HistoriaMedica;
