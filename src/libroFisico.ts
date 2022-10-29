import { Libro } from "./Libro";

const ENVIO = 20;

export class LibroFisico extends Libro {
    constructor(
        public titulo: string,
        public autor: string,
        public precio: number,
        public peso: number,
    ) {
        super(titulo, autor, precio);
    }

    public calcularComision() {
        return this.precio * 0.05;
    }

    public calcularEnvio() {
        return ENVIO;
    }
}