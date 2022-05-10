import { Valor } from "./Valor"

export class Especialidad{

    nombre: String

    valores: Valor[]

    constructor(nombre: String, valores: Valor[]) {
        this.nombre = nombre
        this.valores = valores
    }

}