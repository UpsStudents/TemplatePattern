export abstract class Libro {

    constructor(
        public titulo: string,
        public autor: string,
        public precio: number,
    ) {


    }

    public calcularPrecioFinal() {
        return this.precio + this.calcularComision() + this.calcularEnvio();
    }

    public abstract calcularComision(): number;

    public abstract calcularEnvio(): number;


}