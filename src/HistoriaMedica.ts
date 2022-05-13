import { Registro } from "./Registro";
import { Paciente } from "./Paciente";

export class HistoriaMedica {

    
    private registros: Registro[] = [];
    private paciente: Paciente;

    constructor (paciente: Paciente){
        this.paciente = paciente;
    }

    agregarRegistro(registro: Registro){
        this.registros.push(registro);
    }
}