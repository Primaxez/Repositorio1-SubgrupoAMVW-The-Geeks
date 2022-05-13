"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
class Registro {
    constructor(cita, mediciones = []) {
        this.mediciones = [];
        this.observers = [];
        this.cita = cita;
        this.mediciones = this.mediciones;
    }
    agregarMedicion(medicion) {
        this.mediciones.push(medicion);
    }
    obtenerMedicion() {
    }
    add(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Registro: Ya posee un Observer asignado');
        }
        this.observers.push(observer);
        console.log('Registro: Se asignó un Observer');
    }
    remove(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex) {
            return console.log('Registro: No posee ningún Observer');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Registro: Se removió un Observer');
    }
    notifyall() {
        console.log('Registro: Notificando a Observers');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
exports.Registro = Registro;
