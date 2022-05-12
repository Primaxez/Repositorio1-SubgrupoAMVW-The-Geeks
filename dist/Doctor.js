"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Registro_1 = require("./Registro");
const Persona_1 = require("./Persona");
class Doctor extends Persona_1.Persona {
    constructor(nombre_usuario, contrasena, nombre, especialidad) {
        super(nombre_usuario, contrasena, nombre);
        this.registros = [];
        this.especialidad = especialidad;
    }
    crearRegistro(antecedentes, cita) {
        this.registros.push(new Registro_1.Registro(antecedentes, cita));
    }
    moficarRegistro() {
    }
    aceptarCita() {
    }
}
exports.Doctor = Doctor;
