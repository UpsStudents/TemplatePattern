import { Libro } from "./Libro";

export class LibroDigital extends Libro {
    constructor(
        public titulo: string,
        public autor: string,
        public precio: number,
        public url: string,
    ) {
        super(titulo, autor, precio);
    }

    public calcularComision() {
        return this.precio * 0.02;
    }

    public calcularEnvio() {
        return 0;
    }
}