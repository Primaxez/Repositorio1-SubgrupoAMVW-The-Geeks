export class PagoMensual implements ModalidadPago{
    diaPago: number;

    constructor(diaPago: number){
        this.diaPago = diaPago;
    }
}


let FormaPago1: PagoMensual = new PagoMensual(1);