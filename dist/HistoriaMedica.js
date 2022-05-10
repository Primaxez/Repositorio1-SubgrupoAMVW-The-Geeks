"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoriaMedica = void 0;
class HistoriaMedica {
    constructor(paciente) {
        this.registros = [];
        this.paciente = paciente;
    }
    // CREO QUE NO CORRESPONDE A ESTA CLASE, PERO LO AGREGUÉ DE PRUEBA
    agregarRegistro(registro) {
        this.registros.push(registro);
    }
}
exports.HistoriaMedica = HistoriaMedica;
