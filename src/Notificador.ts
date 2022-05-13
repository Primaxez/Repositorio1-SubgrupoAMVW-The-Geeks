import { Observable } from "./Observable";
import { Observer } from "./Observer";

export class Notificador implements Observer {
    public update(observable: Observable){
            console.log(observable + ': Ha cambiado de estado')

    }


}