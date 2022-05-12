import { DescuentoVisitor } from './DescuentoVisitor';
import { DetallePago } from './DetallePago';
export class PagoMitad  implements DescuentoVisitor{

    AplicarDescuento(detallepago: DetallePago){
        detallepago.monto = detallepago.monto*0.5;
    }
}
