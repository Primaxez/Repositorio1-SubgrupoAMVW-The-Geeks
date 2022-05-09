export class PagoAnual implements ModalidadPago{
    mesPago: number;

    constructor(mesPago: number){
        this.mesPago = mesPago;
    }
}


let FormaPago3: PagoAnual = new PagoAnual(1);