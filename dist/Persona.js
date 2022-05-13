"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre_usuario, contrasena, nombre, ubicacion) {
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }
    modificarDatos(nombre_usuario, contrasena, nombre) {
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
    }
}
exports.Persona = Persona;
