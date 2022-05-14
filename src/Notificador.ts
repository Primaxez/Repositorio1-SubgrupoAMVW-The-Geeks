import { Observable } from "./Observable";
import { Observer } from "./Observer";

export class Notificador implements Observer {
    public update(observable: Observable, descripcion: string){
            console.log(descripcion);

    }


}