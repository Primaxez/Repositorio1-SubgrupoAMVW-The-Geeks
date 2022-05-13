"use strict";
let esSuperman = true;
let esBatman;
let esAcuaman = true;
if (esSuperman) {
    console.log("Estamos salvados!!");
}
else {
    console.log("Ooops! ohh");
}
esSuperman = convertirClark();
if (esSuperman) {
    console.log("Estamos salvados!!");
}
else {
    console.log("Ooops! ohh");
}
function convertirClark() {
    return false;
}
class Avenger {
    constructor(nombre, equipo, nombreReal) {
        this.nombre = "Antman";
        this.puedePelear = false;
        this.peleasGanadas = 3;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}
let antman = new Avenger("Jou", "Captain", "Scoot");
console.log(antman);
/*
let metodopago1:TarjetaCredito =  new TarjetaCredito(5899415735468965, 658, "Vicente Mirabal");
let metodopago2:  Paypal =  new Paypal("vicente@Paypal.com", "Vicente", "Mirabal");

let pago: DetallePago = new DetallePago(EstadoPago.Vencido, "16-11-2000", 15600, metodopago2, 30);

console.log(pago);
let Descuento1: PagoMitad = new PagoMitad();
let Descuento2: PagoTerceraParte = new PagoTerceraParte();
pago.aceptarDescuento(Descuento1);

console.log(pago);

pago.aceptarDescuento(Descuento2);
console.log(pago);
*/ 
