import { Valor } from "./Valor";

export class Medicion{
    // Almacenar la medicion de un valor determinado
    valor: Valor;
    evaluacion: string | number;

    constructor(valor: Valor, evaluacion: string | number){
        this.valor = valor;
        this.evaluacion = evaluacion;
    }
}