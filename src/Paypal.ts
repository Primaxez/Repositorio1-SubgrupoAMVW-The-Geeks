export class Paypal implements MetodoPago {
    correo: string;
    nombre: string;
    apellido: string;


    constructor( correo: string, nombre: string, apellido: string){
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    pagar(monto: number): boolean {
        console.log("Se ha pagado correctamente con Paypal");
        return true;
    }
    
}

let cuenta1: Paypal =  new Paypal("vicente@Paypal.com", "Vicente", "Mirabal");

cuenta1.pagar(30);