import { DetallePago } from './DetallePago';
export interface DescuentoVisitor{
    AplicarDescuento(detallepago: DetallePago): void;
}