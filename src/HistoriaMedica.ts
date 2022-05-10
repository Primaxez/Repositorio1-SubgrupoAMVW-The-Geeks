import { Registro } from "./Registro";
import { Paciente } from "./Paciente";

export class HistoriaMedica {

    
    private registros: Registro[] = [];
    private paciente: Paciente;

    constructor (paciente: Paciente){
        this.paciente = paciente;
    }
    // CREO QUE NO CORRESPONDE A ESTA CLASE, PERO LO AGREGUÉ DE PRUEBA
    agregarRegistro(registro: Registro){
        this.registros.push(registro);
    }
}