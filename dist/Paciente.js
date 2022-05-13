"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const Cita_1 = require("./Cita");
const Persona_1 = require("./Persona");
class Paciente extends Persona_1.Persona {
    constructor(nombre_usuario, contrasena, nombre, edad, profesion, peso, telefono, correo, ubicacion, suscripcion) {
        super(nombre_usuario, contrasena, nombre, ubicacion);
        this.edad = edad;
        this.profesion = profesion;
        this.peso = peso;
        this.telefono = telefono;
        this.correo = correo;
        this.suscripcion = suscripcion;
    }
    solicitarCita(doctor, fecha, tipo) {
        if (this.suscripcion.estado === 'ACTIVA') {
            const cita = new Cita_1.Cita(fecha, Cita_1.EstadoCita.PENDIENTE, doctor, this, tipo, '', 0);
            console.log('CITA: Se ha agendado una cita en: ' + fecha + ' con el Dr. ' + doctor.nombre + ' bajo la modalidad: ' + tipo);
        }
    }
    cancelarCita(cita) {
        if (cita.estado == Cita_1.EstadoCita.CONFIRMADA || cita.estado == Cita_1.EstadoCita.PENDIENTE) {
            cita.estado = Cita_1.EstadoCita.CANCELADA;
        }
    }
    buscarEspecialidad() {
    }
    leerHistoriaMedica() {
    }
}
exports.Paciente = Paciente;
