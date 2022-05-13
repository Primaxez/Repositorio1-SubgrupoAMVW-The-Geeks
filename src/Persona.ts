import { type } from "os";
import { Cita } from "./Cita";
import { Observable } from "./Observable";
import { Observer } from "./Observer";

export abstract class Persona {
    nombre_usuario : string;
    contrasena : string;
    nombre: string;

    constructor(nombre_usuario: string, contrasena: string, nombre: string){
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
    }


    modificarDatos(nombre_usuario: string, contrasena: string, nombre: string) {
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
    }
}