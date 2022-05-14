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
    obtenerMedicion(nombreValor) {
        for (var medicion of this.mediciones) {
            if (medicion.valor.nombre === nombreValor) {
                return medicion;
            }
        }
    }
    EditarMedicion(nombreValor, evaluacion, doctor) {
        for (var medicion of this.mediciones) {
            if (medicion.valor.nombre === nombreValor) {
                medicion.evaluacion = evaluacion;
                this.notifyall("EL doctor " + doctor.nombre + " editó " + nombreValor);
            }
        }
    }
    addObserver(observer) {
        const isExist = this.observers.push(observer);
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
    notifyall(descripcion) {
        //console.log('Registro: Notificando a Observers');
        for (const observer of this.observers) {
            observer.update(this, descripcion);
        }
    }
}
exports.Registro = Registro;
