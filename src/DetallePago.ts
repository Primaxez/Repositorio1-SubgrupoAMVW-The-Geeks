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
    
}


export enum EstadoPago{
    Vencido = "VENCIDO",
    Rechazado = "RECHAZADO",
    Aprobado = "APROBADO"
}



