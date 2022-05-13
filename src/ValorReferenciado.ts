import { Valor } from "./Valor";

export class ValorReferenciado extends Valor {
    referencia_minimo: number;
    referencia_maximo: number;

    constructor(nombre: string, unidad_medida: string, referencia_minimo: number, referencia_maximo: number) {
        super(nombre,unidad_medida);
        this.referencia_minimo = referencia_minimo;
        this.referencia_maximo = referencia_maximo;
    }
}