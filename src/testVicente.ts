let esSuperman: boolean = true;
let esBatman: boolean;
let esAcuaman: boolean = true;

if (esSuperman){
    console.log("Estamos salvados!!");

}else{
    console.log ("Ooops! ohh");
}


esSuperman = convertirClark();

if (esSuperman){
    console.log("Estamos salvados!!");

}else{
    console.log ("Ooops! ohh");
}

function convertirClark(){
    return false;
}

class Avenger{

    nombre:string = "Antman";
    equipo:string;
    nombreReal:string;

    puedePelear:boolean = false;
    peleasGanadas:number = 3;
    
    constructor( nombre: string, equipo: string, nombreReal:string){
     this.nombre= nombre;
     this.equipo= equipo;
     this.nombreReal = nombreReal;
    }
    
}

let antman: Avenger = new Avenger("Jou", "Captain", "Scoot");

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