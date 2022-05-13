import { Especialidad } from "./Especialidad"
import { Registro } from "./Registro"
import { Cita, EstadoCita } from "./Cita"
import { Persona } from "./Persona"

export class Doctor extends Persona{

    especialidad: Especialidad

   

    constructor(nombre_usuario: string, contrasena: string, nombre:string, especialidad: Especialidad) {
        super(nombre_usuario, contrasena, nombre);
        this.especialidad = especialidad;
    }

    crearRegistro(antecedentes: string, cita: Cita) {
       const registro = new Registro(antecedentes, cita)
        return registro;
    }

    moficarRegistro(registro:Registro) {
        
    }

    aceptarCita(cita: Cita) {
        cita.estado = EstadoCita.CONFIRMADA;
    }
}