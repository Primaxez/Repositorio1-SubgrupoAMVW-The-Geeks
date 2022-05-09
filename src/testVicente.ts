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