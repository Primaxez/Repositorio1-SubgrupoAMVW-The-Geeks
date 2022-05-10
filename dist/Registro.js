"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
class Registro {
    constructor(antecedentes, cita) {
        this.valores = [];
        this.observers = [];
        this.antecedentes = antecedentes;
        this.cita = cita;
    }
    agregarValor(valor) {
        this.valores.push(valor);
        console.log('Registro: Se agregó un valor al registro');
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