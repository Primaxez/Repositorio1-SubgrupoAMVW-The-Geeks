"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Cita_1 = require("./Cita");
const EstadoCita_1 = require("./EstadoCita");
const TipoCita_1 = require("./TipoCita");
const Valor_1 = require("./Valor");
const ValorReferenciado_1 = require("./ValorReferenciado");
const Doctor_1 = require("./Doctor");
const Especialidad_1 = require("./Especialidad");
const Paciente_1 = require("./Paciente");
const UbicacionGeografica_1 = require("./UbicacionGeografica");
const Suscripcion_1 = require("./Suscripcion");
const EstadoSuscripcion_1 = require("./EstadoSuscripcion");
const DetallePago_1 = require("./DetallePago");
const EstadoPago_1 = require("./EstadoPago");
const TarjetaCredito_1 = require("./TarjetaCredito");
const PagoMitad_1 = require("./PagoMitad");
const Registro_1 = require("./Registro");
const Medicion_1 = require("./Medicion");
const HistoriaMedica_1 = require("./HistoriaMedica");
const Notificador_1 = require("./Notificador");
let valAntecedentes = new Valor_1.Valor("Antecedentes personales", "Datos");
let valPresion = new Valor_1.Valor("Presión arterial", "mmHg");
let valFrecuencia = new Valor_1.Valor("Frecuencia cardiaca", "cpm");
let valColesterol = new ValorReferenciado_1.ValorReferenciado("Colesterol", "mg/dL", 100, 200);
let valAlbumina = new ValorReferenciado_1.ValorReferenciado("Albumina", "g/dL", 50, 150);
let valoresCardiologia = [valAntecedentes, valPresion, valFrecuencia, valColesterol];
let espCardiologia = new Especialidad_1.Especialidad("Cardiologia", valoresCardiologia);
console.log("Se registró la especialidad de " + espCardiologia.nombre);
console.log("Sus valores para los registros de histora médica son: ");
for (var valor of espCardiologia.valores) {
    console.log(valor.nombre + ", medido en " + valor.unidad_medida);
}
let ubiCaracas = new UbicacionGeografica_1.UbicacionGeografica("Venezuela", "Distrito Capital", "Caracas", 123, 456);
let docFelipe = new Doctor_1.Doctor("tuDocFeli", "12345", "Felipe Andrade", ubiCaracas, [espCardiologia]);
console.log("Se ha registrado el doctor " + docFelipe.nombre + " especialista en " + docFelipe.especialidades[0].nombre);
console.log("Vive en " + ubiCaracas.ciudad + ", " + ubiCaracas.pais);
let tarRodrigo = new TarjetaCredito_1.TarjetaCredito(5899415735468965, 658, "Rodrigo Mesa");
let pagRodrigo = new DetallePago_1.DetallePago(EstadoPago_1.EstadoPago.Vencido, " ", 500, tarRodrigo, 365);
let descuentoMitad = new PagoMitad_1.PagoMitad();
pagRodrigo.aceptarDescuento(descuentoMitad);
pagRodrigo.setDetallePago(EstadoPago_1.EstadoPago.Aprobado, "13-5-22", tarRodrigo, 365);
console.log(pagRodrigo);
let susRodrigo = new Suscripcion_1.Suscripcion(EstadoSuscripcion_1.EstadoSuscripcion.ACTIVA, [pagRodrigo]);
let pacRodrigo = new Paciente_1.Paciente("rodri32", "98765", "Rodrigo Mesa", 48, "Vendedor", 65, "0414123", "rodri32@gmail.com", ubiCaracas, susRodrigo);
console.log("Se ha registrado el paciente " + pacRodrigo.nombre);
console.log("Su último pago fue el día " + pacRodrigo.suscripcion.pagos[pacRodrigo.suscripcion.pagos.length - 1].fechaPago);
console.log("Tiene una suscripcion " + pacRodrigo.suscripcion.estado);
let citaRodrigo = new Cita_1.Cita("13/05/22", EstadoCita_1.EstadoCita.CONFIRMADA, docFelipe, pacRodrigo, TipoCita_1.TipoCita.TELECONSULTA);
console.log("Ha hecho una cita el día " + citaRodrigo.fecha + " con el doctor " + citaRodrigo.doctor.nombre);
console.log("La cita esta " + citaRodrigo.estado);
citaRodrigo.agregarObservacion("Me gustó", 5);
let registro1 = new Registro_1.Registro(citaRodrigo);
pacRodrigo.setHistoriaMedica(new HistoriaMedica_1.HistoriaMedica());
let listaValores = docFelipe.especialidades[0].valores;
for (var valor of listaValores) {
    registro1.agregarMedicion(new Medicion_1.Medicion(valor, "123"));
}
console.log("El doctor realizó el registro midiendo lo siguiente:");
for (var med of registro1.mediciones) {
    console.log(med.valor.nombre + ": " + med.evaluacion + " " + med.valor.unidad_medida);
    if (med.valor instanceof ValorReferenciado_1.ValorReferenciado) {
        console.log("Valor minimo: " + med.valor.referencia_minimo);
        console.log("Valor maximo: " + med.valor.referencia_maximo);
    }
}
let notificacionPush = new Notificador_1.Notificador();
registro1.addObserver(notificacionPush);
console.log(" ");
docFelipe.moficarRegistro(registro1, "Colesterol", 150);
console.log(" ");
for (var med of registro1.mediciones) {
    console.log(med.valor.nombre + ": " + med.evaluacion + " " + med.valor.unidad_medida);
    if (med.valor instanceof ValorReferenciado_1.ValorReferenciado) {
        console.log("Valor minimo: " + med.valor.referencia_minimo);
        console.log("Valor maximo: " + med.valor.referencia_maximo);
    }
}
(_a = pacRodrigo.historia) === null || _a === void 0 ? void 0 : _a.agregarRegistro(registro1);
