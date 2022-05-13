import { Especialidad } from "./Especialidad"
import { Registro } from "./Registro"
import { Cita } from "./Cita"
import { Persona } from "./Persona"
import { UbicacionGeografica } from "./UbicacionGeografica"
export class Doctor extends Persona{

    especialidades: Especialidad[]

    registros: Registro[] = []

    constructor(nombre_usuario: string, contrasena: string, nombre:string, ubicacion: UbicacionGeografica, especialidades: Especialidad[]) {
        super(nombre_usuario, contrasena, nombre, ubicacion);
        this.especialidades = especialidades;
    }
}