import { Cita } from "./Cita";
import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Valor } from "./Valor";
import { Medicion } from "./Medicion";

export class Registro implements Observable {
    mediciones: Medicion[] = [];
    private cita : Cita;
    private observers: Observer[] = [];

    constructor(cita: Cita, mediciones: Medicion[] = []){
        this.cita = cita;
        this.mediciones = this.mediciones;
    }

    agregarMedicion(medicion: Medicion) {
        this.mediciones.push(medicion);     
    }

    obtenerMedicion(nombreValor: string) {
        for (var medicion of this.mediciones) {
            if (medicion.valor.nombre === nombreValor) {
                return medicion;
            }
        }
    }


    add(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist){
            return console.log('Registro: Ya posee un Observer asignado');
        }
        this.observers.push(observer);
        console.log('Registro: Se asignó un Observer');
    }
    remove(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex){
            return console.log('Registro: No posee ningún Observer');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Registro: Se removió un Observer');
    }
    notifyall(): void {
        console.log('Registro: Notificando a Observers');

        for (const observer of this.observers){
            observer.update(this);
        }
    }
    


    
}