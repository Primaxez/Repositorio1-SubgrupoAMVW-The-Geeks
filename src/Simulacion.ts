import { Cita } from "./Cita";
import { EstadoCita } from "./EstadoCita";
import { TipoCita } from "./TipoCita";
import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Valor } from "./Valor";
import { ValorReferenciado } from "./ValorReferenciado";
import { Doctor } from "./Doctor";
import { Especialidad } from "./Especialidad";
import { Paciente } from "./Paciente";
import { UbicacionGeografica } from "./UbicacionGeografica";
import { Suscripcion } from "./Suscripcion";
import { EstadoSuscripcion } from "./EstadoSuscripcion";
import { DetallePago } from "./DetallePago";
import { EstadoPago } from "./EstadoPago";
import { TarjetaCredito } from './TarjetaCredito';
import { Paypal } from './Paypal';
import { DescuentoVisitor } from './DescuentoVisitor';
import { PagoMitad } from './PagoMitad';
import { PagoTerceraParte } from './PagoTerceraParte';
import { Registro } from "./Registro";
import { Medicion } from "./Medicion";
import { HistoriaMedica } from "./HistoriaMedica";
import { Notificador } from './Notificador';

let valAntecedentes = new Valor("Antecedentes personales", "Datos");
let valPresion = new Valor("Presión arterial", "mmHg");
let valFrecuencia = new Valor("Frecuencia cardiaca", "cpm");
let valColesterol = new ValorReferenciado("Colesterol", "mg/dL", 100, 200);
let valAlbumina = new ValorReferenciado("Albumina", "g/dL", 50, 150);

let valoresCardiologia : Valor[] = [valAntecedentes, valPresion, valFrecuencia, valColesterol];

let espCardiologia = new Especialidad("Cardiologia", valoresCardiologia);

console.log("Se registró la especialidad de " + espCardiologia.nombre);
console.log("Sus valores para los registros de histora médica son: ");

for (var valor of espCardiologia.valores) {
    console.log(valor.nombre + ", medido en " + valor.unidad_medida);
}

let ubiCaracas = new UbicacionGeografica("Venezuela", "Distrito Capital", "Caracas", 123, 456);

let docFelipe = new Doctor("tuDocFeli", "12345", "Felipe Andrade", ubiCaracas, [espCardiologia]);
console.log("Se ha registrado el doctor " + docFelipe.nombre + " especialista en " + docFelipe.especialidades[0].nombre);
console.log("Vive en " + ubiCaracas.ciudad + ", " + ubiCaracas.pais);

let tarRodrigo:TarjetaCredito =  new TarjetaCredito(5899415735468965, 658, "Rodrigo Mesa");
let pagRodrigo = new DetallePago(EstadoPago.Vencido, " ", 500, tarRodrigo, 365);
let  descuentoMitad: PagoMitad =  new PagoMitad();
pagRodrigo.aceptarDescuento(descuentoMitad);
pagRodrigo.setDetallePago(EstadoPago.Aprobado,"13-5-22", tarRodrigo,365);

console.log(pagRodrigo);

let susRodrigo = new Suscripcion(EstadoSuscripcion.ACTIVA, [pagRodrigo]);

let pacRodrigo = new Paciente("rodri32", "98765", "Rodrigo Mesa", 48, "Vendedor", 65, "0414123", "rodri32@gmail.com", ubiCaracas, susRodrigo);

console.log("Se ha registrado el paciente " + pacRodrigo.nombre);
console.log("Su último pago fue el día " + pacRodrigo.suscripcion.pagos[pacRodrigo.suscripcion.pagos.length -1].fechaPago);
console.log("Tiene una suscripcion " + pacRodrigo.suscripcion.estado);

let citaRodrigo = new Cita("13/05/22", EstadoCita.CONFIRMADA, docFelipe, pacRodrigo, TipoCita.TELECONSULTA);

console.log("Ha hecho una cita el día " + citaRodrigo.fecha + " con el doctor " + citaRodrigo.doctor.nombre);
console.log("La cita esta " + citaRodrigo.estado);

citaRodrigo.agregarObservacion("Me gustó", 5);

let registro1 = new Registro(citaRodrigo);

pacRodrigo.setHistoriaMedica(new HistoriaMedica());

let listaValores = docFelipe.especialidades[0].valores;

for (var valor of listaValores) {
    registro1.agregarMedicion(new Medicion(valor, "123"));
}

console.log("El doctor realizó el registro midiendo lo siguiente:");

for (var med of registro1.mediciones) {
    console.log(med.valor.nombre + ": " + med.evaluacion + " " + med.valor.unidad_medida);
    if (med.valor instanceof ValorReferenciado) {
        console.log("Valor minimo: " + med.valor.referencia_minimo);
        console.log("Valor maximo: " + med.valor.referencia_maximo);
    }
}


let notificacionPush: Notificador = new Notificador();
registro1.addObserver(notificacionPush);

console.log(" ");

docFelipe.moficarRegistro(registro1, "Colesterol", 150);

console.log(" ");

for (var med of registro1.mediciones) {
    console.log(med.valor.nombre + ": " + med.evaluacion + " " + med.valor.unidad_medida);
    if (med.valor instanceof ValorReferenciado) {
        console.log("Valor minimo: " + med.valor.referencia_minimo);
        console.log("Valor maximo: " + med.valor.referencia_maximo);
    }
}

pacRodrigo.historia?.agregarRegistro(registro1);