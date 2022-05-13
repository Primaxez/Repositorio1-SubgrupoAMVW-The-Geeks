import { Cita } from "./Cita";
import { Registro } from "./Registro";
import { DetallePago } from "./DetallePago";
import { Observable } from "./Observable";
export interface Observer{
    update(observable: Observable): void;
}