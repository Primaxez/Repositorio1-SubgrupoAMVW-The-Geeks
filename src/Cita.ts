import { throws } from "assert";
import { Doctor } from "./Doctor";
import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Paciente } from "./Paciente";

export class Cita implements Observable {

    fecha: string;
    estado: EstadoCita;
    doctor: Doctor;
    paciente: Paciente;
    tipo: TipoCita;
    comentario: string = "";
    valoracion: number = -1;
    private observers: Observer[] = [];
    constructor(fecha: string,
        estado: EstadoCita,
        doctor: Doctor,
        paciente: Paciente,
        tipo: TipoCita,
        comentario: string = "",
        valoracion: number = -1 ) 
        {
            this.fecha = fecha;
            this.estado =  estado;
            this.doctor = doctor;
            this.paciente = paciente;
            this.tipo = tipo;
            this.comentario = comentario;
            this.valoracion = valoracion;
        }

    agregarObservacion(comentario: string, valoracion: number) {
        this.comentario = comentario;
        this.valoracion = valoracion;
    }

    add(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist){
            return console.log('Cita: Ya posee un Observer asignado');
        }
        this.observers.push(observer);
        console.log('Cita: Se asignó un Observer');
    }
    remove(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex){
            return console.log('Cita: No posee ningún Observer');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Cita: Se removió un Observer');
    }
    notifyall(): void {
        console.log('Cita: Notificando a Observers');
        for (const observer of this.observers){
            observer.update(this);
        }
    }

    setEstado(estado: EstadoCita){

        this.estado = estado;
    }
        
}

export enum  EstadoCita {

    CONFIRMADA = "CONFIRMADA",
    CANCELADA = "CANCELADA",
    PENDIENTE = "PENDIENTE"
}

export enum TipoCita{

    TELECONSULTA = "TELECONSULTA",
    PRESENCIAL = "PRESENCIAL"
}