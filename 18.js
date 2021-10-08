/*EQUIPO 8

Alejandra Santamaría
Ezequiel Safdie
Juan Manuel Chilito Zemanate
Nicolas Demaria
Natacha Lucia Martinez Germain


/*Actividad 2:
Crear en un módulo aparte, varias funciones que reciba por parámetro un nombre y saluden en distintos idiomas.
Tendrán de nombre el idioma en el que saludan. Hacerlo con arrow functions.
Crear otra función que reciba dos parámetros, un nombre y un callback.
Ésta función ejecuta al callback enviando al nombre como argumento del callback.
De modo tal que si ejecutamos:*/

let nombre = "Eze";

let traduccion = require("./18-2");

console.log(traduccion.saludar(nombre, traduccion.eng));