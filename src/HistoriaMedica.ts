import { Registro } from "./Registro";
import { Paciente } from "./Paciente";

export class HistoriaMedica {

    registros: Registro[] = [];

    constructor(registros: Registro[] = []){
        this.registros = registros;
    }

    agregarRegistro(registro: Registro){
        this.registros.push(registro);
    }
}