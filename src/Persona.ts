export abstract class Persona{
    nombre_usuario : string;
    contrasena : string;
    nombre: string;

    constructor(nombre_usuario: string, contrasena: string, nombre: string){
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
    }
    modificarDatos() {

    }
}