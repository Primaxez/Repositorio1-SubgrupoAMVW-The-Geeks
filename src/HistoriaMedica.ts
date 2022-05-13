import { Registro } from "./Registro";
import { Paciente } from "./Paciente";

export class HistoriaMedica {

    registros: Registro[] = [];

    agregarRegistro(registro: Registro){
        this.registros.push(registro);
    }
}