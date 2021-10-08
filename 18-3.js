/*Actividad 2:
Crear en un módulo aparte, varias funciones que reciba por parámetro un nombre y saluden en distintos idiomas.
Tendrán de nombre el idioma en el que saludan. Hacerlo con arrow functions.
Crear otra función que reciba dos parámetros, un nombre y un callback.
Ésta función ejecuta al callback enviando al nombre como argumento del callback.
De modo tal que si ejecutamos:*/

let nombre = "Eze";

let saludar = function (nombre, idioma) {
		return idioma(nombre);
	}

    let esp =nombre => "Hola, " + nombre + " como estas hoy?";
    let eng= nombre => "Hello, " + nombre + " how are you today?";
    let br= nombre => "Oi, " + nombre + " como você está hoje?";
    let ger= nombre => "Hallo, " + nombre + " wie geht es dir heute?";


	console.log(saludar(nombre, eng));
