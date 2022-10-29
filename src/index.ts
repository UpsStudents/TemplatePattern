import { LibroDigital } from "./libroDigital";
import { LibroFisico } from "./libroFisico";

const libroFisico = new LibroFisico('El señor de los anillos', 'J.R.R. Tolkien', 50, 1000);
const libroDigital = new LibroDigital('El señor de los anillos', 'J.R.R. Tolkien', 50, 'http://www.google.com');

console.log("Libro Fisico");
console.log(libroFisico.calcularPrecioFinal());
console.log("Libro Digital");
console.log(libroDigital.calcularPrecioFinal());


