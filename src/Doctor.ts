import { Especialidad } from "./Especialidad"
import { Registro } from "./Registro"
import { Cita } from "./Cita"
import { Persona } from "./Persona"

export class Doctor extends Persona{

    especialidad: Especialidad

    registros: Registro[] = []

    constructor(nombre_usuario: string, contrasena: string, nombre:string, especialidad: Especialidad) {
        super(nombre_usuario, contrasena, nombre);
        this.especialidad = especialidad;
    }

    crearRegistro(antecedentes: string, cita: Cita) {
        this.registros.push(new Registro(antecedentes, cita))
    }

    moficarRegistro() {

    }

    aceptarCita() {

    }
}