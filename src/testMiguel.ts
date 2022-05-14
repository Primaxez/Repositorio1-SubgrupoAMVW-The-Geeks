import { Console } from "console";
import { Doctor } from "./Doctor";
import { Especialidad } from "./Especialidad";
import { HistoriaMedica } from "./HistoriaMedica";
import { Notificador } from "./Notificador";
import { Paciente } from "./Paciente";
import { Paypal } from "./Paypal";
import { Registro } from "./Registro";
import { UbicacionGeografica } from "./UbicacionGeografica";
import { Valor } from "./Valor";

/*
const ubic = new UbicacionGeografica('Venezuela', 'Miranda', 'Caracas', 150, 120);
const espec = new Especialidad('Endocrinologo', []);
const paypal = new Paypal('james@gmail.com', 'James', 'Rodriguez')
const detalle_pago = new DetallePago(EstadoPago.Aprobado, '2022-05/12', 20, paypal, 30);
const sub = new Suscripcion(EstadoSuscripcion.ACTIVA);
sub.addDetallePago(detalle_pago);
const doc = new Doctor('drgonz', '12345', 'Gonzalez', espec);
const pac = new Paciente('james', '12345', 'James', 24, 'Informatico', 100, '0212', 'james@gmai.com', ubic, sub);
const date = new Date('2022-05-20');
pac.solicitarCita(doc, date, TipoCita.TELECONSULTA);
const cita = pac.solicitarCita(doc, date, TipoCita.TELECONSULTA);
const notif = new Notificador();

if (cita) {
    cita.add(notif);
    cita.setEstado(EstadoCita.CONFIRMADA);
    const historia = new HistoriaMedica();
    pac.setHistoriaMedica(historia);
    pac.historia?.agregarRegistro(doc.crearRegistro('Cancer', cita));
}
console.log(pac);
//doc.crearRegistro('CONTROL EXITOSO', cita)
*/