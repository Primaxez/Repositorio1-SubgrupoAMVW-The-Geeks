import { Doctor } from "./Doctor";

export class Directorio {
    // Guardar una lista de doctores para buscar por especialidad o ubicación geográfica
    doctores: Doctor[];

    constructor(doctores: Doctor[]){
        this.doctores = doctores;
    }

}