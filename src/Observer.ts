import { Cita } from "./Cita";
import { Registro } from "./Registro";
import { DetallePago } from "./DetallePago";
export interface Observer{
    update(registro: Registro): void;
    update(cita: Cita): void;
    update(detalle_pago: DetallePago): void;
}