import internal = require("stream");
import { Cita, EstadoCita, TipoCita } from "./Cita";
import { Doctor } from "./Doctor";
import { HistoriaMedica } from "./HistoriaMedica";
import { Persona } from "./Persona";
import { Registro } from "./Registro";
import { EstadoSuscripcion, Suscripcion } from "./Suscripcion";
import { UbicacionGeografica } from "./UbicacionGeografica";

export class Paciente extends Persona {
    edad: number;
    profesion : string;
    peso : number;
    telefono : string;
    correo : string;
    private ubicacion: UbicacionGeografica;
    private suscripcion : Suscripcion;
    historia? : HistoriaMedica ;
    constructor (
        nombre_usuario: string, 
        contrasena: string, 
        nombre: string,
        edad: number, 
        profesion: string, 
        peso: number, 
        telefono: string, 
        correo: string,
        ubicacion: UbicacionGeografica,
        suscripcion: Suscripcion,
        ) 
        {
            super(nombre_usuario,contrasena, nombre)  ;
            this.edad = edad;
            this.profesion = profesion;
            this.peso = peso;
            this.telefono = telefono;
            this.correo = correo;
            this.ubicacion = ubicacion;
            this.suscripcion = suscripcion;
        }
        
        solicitarCita(doctor: Doctor, fecha: Date, tipo: TipoCita) {
            if (this.suscripcion.estado === 'ACTIVA') {
                const cita = new Cita(fecha, EstadoCita.PENDIENTE, doctor, this, tipo, '', 0 );
                console.log('CITA: Se ha agendado una cita en: ' + fecha + ' con el Dr. ' + doctor.nombre + ' bajo la modalidad: ' + tipo);
                return cita;
            }
            console.log('NO POSEE UNA SUSCRIPCIÓN ACTIVA')
            return null;
        }

        cancelarCita(cita: Cita){
            if (cita.estado == EstadoCita.CONFIRMADA || cita.estado == EstadoCita.PENDIENTE) {
                cita.estado = EstadoCita.CANCELADA;
            }
        }

        buscarEspecialidad() {
            
        }

        setHistoriaMedica(historia: HistoriaMedica){
            this.historia = historia;
        }

        leerHistoriaMedica(){
            if (this.historia){
                for (let registro of this.historia.registros){
                    console.log(registro);
                }
            }
            else{
                console.log('No posee una Historia Medica aun')
            }
            
        }
}