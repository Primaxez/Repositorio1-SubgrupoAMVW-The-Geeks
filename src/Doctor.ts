import { Especialidad } from "./Especialidad"
import { Registro } from "./Registro"
import { Cita } from "./Cita"
import { EstadoCita } from "./EstadoCita"
import { Persona } from "./Persona"
import { UbicacionGeografica } from "./UbicacionGeografica"
export class Doctor extends Persona{

    especialidades: Especialidad[];

   

    constructor(nombre_usuario: string, contrasena: string, nombre:string, ubicacion: UbicacionGeografica, especialidades: Especialidad[]) {
        super(nombre_usuario, contrasena, nombre, ubicacion);
        this.especialidades = especialidades;
    }

    crearRegistro(cita: Cita) {
        let registro = new Registro(cita)
        return registro;
    }

    moficarRegistro(registro:Registro, nombreValor: string, evaluacion: string | number ) {
        registro.editarMedicion(nombreValor, evaluacion, this);
          
    }

    aceptarCita(cita: Cita) {
        cita.estado = EstadoCita.CONFIRMADA;
    }
}