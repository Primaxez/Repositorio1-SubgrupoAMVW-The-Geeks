"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Persona_1 = require("./Persona");
class Doctor extends Persona_1.Persona {
    constructor(nombre_usuario, contrasena, nombre, ubicacion, especialidades) {
        super(nombre_usuario, contrasena, nombre, ubicacion);
        this.registros = [];
        this.especialidades = especialidades;
    }
}
exports.Doctor = Doctor;
