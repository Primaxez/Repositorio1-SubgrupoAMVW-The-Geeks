"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Cita_1 = require("./Cita");
const DetallePago_1 = require("./DetallePago");
const Doctor_1 = require("./Doctor");
const Especialidad_1 = require("./Especialidad");
const HistoriaMedica_1 = require("./HistoriaMedica");
const Notificador_1 = require("./Notificador");
const Paciente_1 = require("./Paciente");
const Paypal_1 = require("./Paypal");
const Suscripcion_1 = require("./Suscripcion");
const UbicacionGeografica_1 = require("./UbicacionGeografica");
const ubic = new UbicacionGeografica_1.UbicacionGeografica('Venezuela', 'Miranda', 'Caracas', 150, 120);
const espec = new Especialidad_1.Especialidad('Endocrinologo', []);
const paypal = new Paypal_1.Paypal('james@gmail.com', 'James', 'Rodriguez');
const detalle_pago = new DetallePago_1.DetallePago(DetallePago_1.EstadoPago.Aprobado, '2022-05/12', 20, paypal, 30);
const sub = new Suscripcion_1.Suscripcion(Suscripcion_1.EstadoSuscripcion.ACTIVA);
sub.addDetallePago(detalle_pago);
const doc = new Doctor_1.Doctor('drgonz', '12345', 'Gonzalez', espec);
const pac = new Paciente_1.Paciente('james', '12345', 'James', 24, 'Informatico', 100, '0212', 'james@gmai.com', ubic, sub);
const date = new Date('2022-05-20');
const cita = pac.solicitarCita(doc, date, Cita_1.TipoCita.TELECONSULTA);
const notif = new Notificador_1.Notificador();
if (cita) {
    cita.add(notif);
    cita.setEstado(Cita_1.EstadoCita.CONFIRMADA);
    const historia = new HistoriaMedica_1.HistoriaMedica();
    pac.setHistoriaMedica(historia);
    (_a = pac.historia) === null || _a === void 0 ? void 0 : _a.agregarRegistro(doc.crearRegistro('Cancer', cita));
}
console.log(pac);
//doc.crearRegistro('CONTROL EXITOSO', cita)
