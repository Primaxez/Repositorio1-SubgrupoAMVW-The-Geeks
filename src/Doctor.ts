import { Especialidad } from "./Especialidad"
import { Registro } from "./Registro"
import { Cita } from "./Cita"

export class Doctor{

    especialidad: Especialidad

    registros: Registro[] = []

    constructor(especialidad: Especialidad) {
        this.especialidad = especialidad
    }

    crearRegistro(antecedentes: string, cita: Cita) {
        this.registros.push(new Registro(antecedentes, cita))
    }

    moficarRegistro() {

    }

    aceptarCita() {

    }
}