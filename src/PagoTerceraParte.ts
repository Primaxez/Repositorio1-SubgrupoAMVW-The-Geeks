import { DescuentoVisitor } from './DescuentoVisitor';
import { DetallePago } from './DetallePago';
export class PagoTerceraParte  implements DescuentoVisitor{

    AplicarDescuento(detallepago: DetallePago){
         detallepago.monto = detallepago.monto*(1/3);
    }
}