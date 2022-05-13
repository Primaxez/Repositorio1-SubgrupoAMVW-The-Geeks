import { TarjetaCredito } from './TarjetaCredito';
import { Paypal } from './Paypal';
import { DescuentoVisitor } from './DescuentoVisitor';
import { PagoMitad } from './PagoMitad';
import { PagoTerceraParte } from './PagoTerceraParte';


export class DetallePago{

    estado: EstadoPago;
    fechaPago:string;
    monto:number;
    metodo : MetodoPago;
    cantDias : number;

    constructor( estado: EstadoPago, fechaPago: string, monto:number, metodo: MetodoPago, cantDias: number){
     this.estado= estado;
     this.fechaPago= fechaPago;
     this.monto = monto;
     this.metodo = metodo;
     this.cantDias = cantDias;

    }

    consultarEstado(){
        return this.estado;
    }

    aceptarDescuento(descuento: DescuentoVisitor){
            descuento.AplicarDescuento(this);
    }

    pagarSuscripcion(metodoPago: MetodoPago){
        metodoPago.pagar(this.monto);
        
    }


    
}


export enum EstadoPago{
    Vencido = "VENCIDO",
    Rechazado = "RECHAZADO",
    Aprobado = "APROBADO"
}



let metodopago1:TarjetaCredito =  new TarjetaCredito(5899415735468965, 658, "Vicente Mirabal");
let metodopago2:  Paypal =  new Paypal("vicente@Paypal.com", "Vicente", "Mirabal");

let pago: DetallePago = new DetallePago(EstadoPago.Vencido, "16-11-2000", 15600, metodopago2, 30);

console.log(pago);
let Descuento1: PagoMitad = new PagoMitad();
let Descuento2: PagoTerceraParte = new PagoTerceraParte();
pago.aceptarDescuento(Descuento1);

console.log(pago);

pago.aceptarDescuento(Descuento2);
console.log(pago);