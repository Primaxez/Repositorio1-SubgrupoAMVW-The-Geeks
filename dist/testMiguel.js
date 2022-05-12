"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cita_1 = require("./Cita");
const Doctor_1 = require("./Doctor");
const Especialidad_1 = require("./Especialidad");
const Paciente_1 = require("./Paciente");
const Suscripcion_1 = require("./Suscripcion");
const UbicacionGeografica_1 = require("./UbicacionGeografica");
const ubic = new UbicacionGeografica_1.UbicacionGeografica('Venezuela', 'Miranda', 'Caracas', 150, 120);
const espec = new Especialidad_1.Especialidad('Endocrinologo', []);
const sub = new Suscripcion_1.Suscripcion(Suscripcion_1.EstadoSuscripcion.ACTIVA);
const doc = new Doctor_1.Doctor('drgonz', '12345', 'Gonzalez', espec);
const pac = new Paciente_1.Paciente('james', '12345', 'James', 24, 'Informatico', 100, '0212', 'james@gmai.com', ubic, sub);
const date = new Date('2022-05-20');
pac.solicitarCita(doc, date, Cita_1.TipoCita.TELECONSULTA);
