export class UbicacionGeografica {
    pais: string;
    estado: string;
    ciudad: string;
    lat: number;
    long: number;

    constructor(
        pais: string,
        estado: string,
        ciudad: string,
        lat: number,
        long: number
    ) {
        this.pais = pais;
        this.estado = estado;
        this.ciudad = ciudad;
        this.lat = lat;
        this.long = long;
    }


    actualizarGeolocalizacion(){

    }

    actualizarUbicacion(ciudad: string, estado: string){

    }
}