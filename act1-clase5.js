
// mesa 1: Karina Dominguez, Hernan Días, Julieta Ayala, Stefany Salamanca, Juan sebastian Velasquez, Natacha Martinez

// microdesafio: 

/* 
1) devuelve 30
2) 20

*/

// funciones simples
//1)

function pulgada (numPulgada){
    return numPulgada*2.54;
}

let pulg= 6;

console.log( pulg+" pulgadas son "+pulgada(pulg)+"cm");

// 2)

function url (page){
	return "http://www."+page+".com";
}

let pagina="9gag";

console.log(url(pagina));

// 3)

function admiracion (frase){
	return frase+"!";
}

let nuevaFrase="los gatos enojados";

console.log(admiracion(nuevaFrase));

// 4)

function edadPerros (edadP) {
	return edadP*7;
}

let edad= 4;

console.log(edad + " años humanos son = a "+edadPerros(edad)+ " perrunos");

//5)

function horaTrabajo (sueldoM) {
	return sueldoM/horasTrabajadas ;
}

let horasTrabajadas= 40;
let sueldoMensual = 40000;

console.log("el valor de la hora de trabajo es de "+horaTrabajo(sueldoMensual) + " considerando un sueldo mensual de "+ sueldoMensual +" trabajando "+horasTrabajadas+" horas mensuales");


// 6)

function imc(alturaMt, pesoKg){
	return pesoKg/ Math.pow(alturaMt,2);
}

let peso = 71, altura = 1.77;

console.log(imc(altura, peso));

// 7) Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 

function mayusc(cadena) {
	return (cadena.toUpperCase());
}

let convertir = "pepepe anana";

console.log(mayusc(convertir));

// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
//pista: te servirá revisar que hace la palabra reservada typeof

let dato=4;

function adivinaTipo (datoAAdivinar){
	return typeof(datoAAdivinar);
}

console.log(adivinaTipo(dato));

// 8) Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.

function circunferenciaMedir (radioC) {
	return Math.PI*(2*radioC);
}

let radioElegido= 4;

console.log(circunferenciaMedir(radioElegido));

