import { PagoMensual } from './PagoMensual';
import { PagoAnual } from './PagoAnual';
import { TarjetaCredito } from './TarjetaCredito';
import { Paypal } from './Paypal';

export class DetallePago{

    estado: EstadoPago;
    fechaPago:string;
    monto:number;
    modalidad: ModalidadPago;
    metodo : MetodoPago;

    constructor( estado: EstadoPago, fechaPago: string, monto:number, modalidad: ModalidadPago, metodo: MetodoPago){
     this.estado= estado;
     this.fechaPago= fechaPago;
     this.monto = monto;
     this.modalidad = modalidad;
     this.metodo = metodo;

    }

    consultarEstado(){
        return this.estado;
    }
    
}


enum EstadoPago{
    Vencido = "VENCIDO",
    Rechazado = "RECHAZADO",
    Aprobado = "APROBADO"
}


let formapago2: PagoMensual= new PagoMensual(1);
let formapago3: PagoAnual= new PagoAnual(6);
let metodopago1:TarjetaCredito =  new TarjetaCredito(5899415735468965, 658, "Vicente Mirabal");
let metodopago2:  Paypal =  new Paypal("vicente@Paypal.com", "Vicente", "Mirabal");

let pago: DetallePago = new DetallePago(EstadoPago.Vencido, "16-11-2000", 15600, formapago3, metodopago2);
console.log(pago);