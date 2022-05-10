import { Console } from "console";
import { Cita, EstadoCita, TipoCita } from "./Cita";
import { Doctor } from "./Doctor";
import { HistoriaMedica } from "./HistoriaMedica";
import { Notificador } from "./Notificador";
import { Paciente } from "./Paciente";
import { Registro } from "./Registro";
import { Valor } from "./Valor";

const now = new Date();
const doc = new Doctor();
const pac = new Paciente();
const cita1 = new Cita(now, EstadoCita.PENDIENTE, doc, pac, TipoCita.TELECONSULTA, "Hapens", 5);
console.log(cita1);
const noti = new Notificador();
cita1.add(noti);

const val = new Valor();
const reg = new Registro('Enfermedad Intestinal', cita1);
reg.agregarValor(val);
console.log(reg);

cita1.setEstado(EstadoCita.CONFIRMADA);
console.log(cita1);

const hist = new HistoriaMedica(pac);
hist.agregarRegistro(reg);
console.log(hist);