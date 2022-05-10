import { Cita } from "./Cita";
import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Valor } from "./Valor";

export class Registro implements Observable {
    antecedentes: string;
    valores: Valor[] = [];
    private cita : Cita;
    private observers: Observer[] = [];

    constructor(antecedentes: string, cita: Cita){
        this.antecedentes = antecedentes;
        this.cita = cita;
    }

    agregarValor(valor: Valor) {
        this.valores.push(valor);
        console.log('Registro: Se agregó un valor al registro')
        
        
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