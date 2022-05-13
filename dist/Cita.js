"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoCita = exports.EstadoCita = exports.Cita = void 0;
class Cita {
    constructor(fecha, estado, doctor, paciente, tipo, comentario = "", valoracion = -1) {
        this.comentario = "";
        this.valoracion = -1;
        this.observers = [];
        this.fecha = fecha;
        this.estado = estado;
        this.doctor = doctor;
        this.paciente = paciente;
        this.tipo = tipo;
        this.comentario = comentario;
        this.valoracion = valoracion;
    }
    agregarObservacion(comentario, valoracion) {
        this.comentario = comentario;
        this.valoracion = valoracion;
    }
    add(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Cita: Ya posee un Observer asignado');
        }
        this.observers.push(observer);
        console.log('Cita: Se asignó un Observer');
    }
    remove(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex) {
            return console.log('Cita: No posee ningún Observer');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Cita: Se removió un Observer');
    }
    notifyall() {
        for (const observer of this.observers) {
            console.log('Cita: Notificando a ' + observer + ' que cambió a Estado: ' + this.estado);
            observer.update(this);
        }
    }
    setEstado(estado) {
        this.estado = estado;
        this.notifyall();
    }
}
exports.Cita = Cita;
var EstadoCita;
(function (EstadoCita) {
    EstadoCita["CONFIRMADA"] = "CONFIRMADA";
    EstadoCita["CANCELADA"] = "CANCELADA";
    EstadoCita["PENDIENTE"] = "PENDIENTE";
    EstadoCita["FINALIZADA"] = "FINALIZADA";
})(EstadoCita = exports.EstadoCita || (exports.EstadoCita = {}));
var TipoCita;
(function (TipoCita) {
    TipoCita["TELECONSULTA"] = "TELECONSULTA";
    TipoCita["PRESENCIAL"] = "PRESENCIAL";
})(TipoCita = exports.TipoCita || (exports.TipoCita = {}));
