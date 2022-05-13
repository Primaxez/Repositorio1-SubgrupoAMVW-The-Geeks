"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Registro_1 = require("./Registro");
const Cita_1 = require("./Cita");
const Persona_1 = require("./Persona");
class Doctor extends Persona_1.Persona {
    constructor(nombre_usuario, contrasena, nombre, especialidad) {
        super(nombre_usuario, contrasena, nombre);
        this.especialidad = especialidad;
    }
    crearRegistro(antecedentes, cita) {
        const registro = new Registro_1.Registro(antecedentes, cita);
        return registro;
    }
    moficarRegistro(registro) {
    }
    aceptarCita(cita) {
        cita.estado = Cita_1.EstadoCita.CONFIRMADA;
    }
}
exports.Doctor = Doctor;
