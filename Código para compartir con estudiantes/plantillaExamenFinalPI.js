const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Natacha";
const tema = "TEMA 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const archivo = require("./jsonHelper");
let arrayPeliculas = archivo.leerJson("peliculas");


// A

// B

// C

// D

// E

// F

// G

// H

// I
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .D. Buscar");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .H. Duracion");
// Ejecución aquí
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí
console.log(o);
