export class TarjetaCredito implements MetodoPago {
    nroTarjeta: number;
    cvv: number;
    nombreTarjeta: string;


    constructor( nroTarjeta: number, cvv: number, nombreTarjeta: string){
        this.nroTarjeta = nroTarjeta;
        this.cvv = cvv;
        this.nombreTarjeta = nombreTarjeta;
    }

    pagar(monto: number): void {
        console.log("Se ha pagado correctamente con la Tarjeta de Credito");
    }
    
}

let card1: TarjetaCredito =  new TarjetaCredito(5899415735468965, 658, "Vicente Mirabal");

card1.pagar(16);