"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const Cita_1 = require("./Cita");
const EstadoCita_1 = require("./EstadoCita");
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
            const cita = new Cita_1.Cita(fecha, EstadoCita_1.EstadoCita.PENDIENTE, doctor, this, tipo, '', 0);
            console.log('CITA: Se ha agendado una cita en: ' + fecha + ' con el Dr. ' + doctor.nombre + ' bajo la modalidad: ' + tipo);
            return cita;
        }
        console.log('NO POSEE UNA SUSCRIPCIÓN ACTIVA');
        return null;
    }
    cancelarCita(cita) {
        if (cita.estado == EstadoCita_1.EstadoCita.CONFIRMADA || cita.estado == EstadoCita_1.EstadoCita.PENDIENTE) {
            cita.estado = EstadoCita_1.EstadoCita.CANCELADA;
        }
    }
    buscarEspecialidad(especialidad, directorio) {
        let lista = [];
        for (var doc of directorio.doctores) {
            for (var esp of doc.especialidades) {
                if (esp = especialidad) {
                    lista.push(doc);
                }
            }
        }
        return lista;
    }
    buscarUbicacion(ubicacion, directorio) {
        let lista = [];
        for (var doc of directorio.doctores) {
            if (doc.obtenerUbicacion().pais == ubicacion.pais && doc.obtenerUbicacion().estado == ubicacion.estado) {
                lista.push(doc);
            }
        }
        return lista;
    }
    setHistoriaMedica(historia) {
        this.historia = historia;
    }
    leerHistoriaMedica() {
        if (this.historia) {
            for (let registro of this.historia.registros) {
                console.log(registro);
            }
        }
        else {
            console.log('No posee una Historia Medica aun');
        }
    }
}
exports.Paciente = Paciente;
