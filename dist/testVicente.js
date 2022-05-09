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
