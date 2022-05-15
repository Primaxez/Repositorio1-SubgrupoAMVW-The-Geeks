"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UbicacionGeografica = void 0;
class UbicacionGeografica {
    constructor(pais, estado, ciudad, lat, long) {
        this.pais = pais;
        this.estado = estado;
        this.ciudad = ciudad;
        this.lat = lat;
        this.long = long;
    }
    actualizarGeolocalizacion() {
    }
    actualizarUbicacion(ciudad, estado) {
        this.ciudad = ciudad;
        this.estado = estado;
    }
}
exports.UbicacionGeografica = UbicacionGeografica;
