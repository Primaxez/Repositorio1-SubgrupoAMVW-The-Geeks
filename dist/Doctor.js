"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Registro_1 = require("./Registro");
const EstadoCita_1 = require("./EstadoCita");
const Persona_1 = require("./Persona");
class Doctor extends Persona_1.Persona {
    constructor(nombre_usuario, contrasena, nombre, ubicacion, especialidades) {
        super(nombre_usuario, contrasena, nombre, ubicacion);
        this.especialidades = especialidades;
    }
    crearRegistro(cita) {
        let registro = new Registro_1.Registro(cita);
        return registro;
    }
    moficarRegistro(registro, nombreValor, evaluacion) {
        registro.editarMedicion(nombreValor, evaluacion, this);
    }
    aceptarCita(cita) {
        cita.setEstado(EstadoCita_1.EstadoCita.CONFIRMADA);
    }
}
exports.Doctor = Doctor;
