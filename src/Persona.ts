import { UbicacionGeografica } from "./UbicacionGeografica";

export abstract class Persona{
    nombre_usuario : string;
    contrasena : string;
    nombre: string;
    private ubicacion: UbicacionGeografica;

    constructor(nombre_usuario: string, contrasena: string, nombre: string, ubicacion: UbicacionGeografica){
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }


    modificarDatos(nombre_usuario: string, contrasena: string, nombre: string) {
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
    }
}