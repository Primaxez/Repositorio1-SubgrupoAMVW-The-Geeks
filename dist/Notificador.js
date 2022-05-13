"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificador = void 0;
class Notificador {
    update(observable) {
        console.log(observable + ': Ha cambiado de estado');
    }
}
exports.Notificador = Notificador;
