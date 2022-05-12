import { Console } from "console";
import { Cita, EstadoCita, TipoCita } from "./Cita";
import { Doctor } from "./Doctor";
import { Especialidad } from "./Especialidad";
import { HistoriaMedica } from "./HistoriaMedica";
import { Notificador } from "./Notificador";
import { Paciente } from "./Paciente";
import { Registro } from "./Registro";
import { EstadoSuscripcion, Suscripcion } from "./Suscripcion";
import { UbicacionGeografica } from "./UbicacionGeografica";
import { Valor } from "./Valor";


const ubic = new UbicacionGeografica('Venezuela', 'Miranda', 'Caracas', 150, 120);
const espec = new Especialidad('Endocrinologo', []);
const sub = new Suscripcion(EstadoSuscripcion.ACTIVA);
const doc = new Doctor('drgonz', '12345', 'Gonzalez', espec);
const pac = new Paciente('james', '12345', 'James', 24, 'Informatico', 100, '0212', 'james@gmai.com', ubic, sub);
const date = new Date('2022-05-20');
pac.solicitarCita(doc, date, TipoCita.TELECONSULTA);