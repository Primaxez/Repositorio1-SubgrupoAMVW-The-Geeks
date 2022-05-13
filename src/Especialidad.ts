import { Valor } from "./Valor"

export class Especialidad{

    nombre: string

    valores: Valor[]

    constructor(nombre: string, valores: Valor[]) {
        this.nombre = nombre
        this.valores = valores
    }

}