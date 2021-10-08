const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Natacha Lucia Martinez Germain";
const tema = "TEMA 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const archivo = require("./jsonHelper");
let arrayPeliculas = archivo.leerJson("peliculas");

// A

let gestionDePeliculas = {

// B

peliculas : arrayPeliculas,

// C

listarPelículas: function (array){

	let listado = array.forEach((pelicula, indice) => {
		console.log(
			"Titulo: " + pelicula.titulo + ", de " + pelicula.director + ". Duración: " +
			pelicula.duracion + " minutos, " + pelicula.genero + ", " + pelicula.calificacionIMDB +" / 10 en IMBD"
		);
	});

},

// D

buscarPorId: function (peliId){
	return this
	.peliculas
	.find(pelicula => pelicula.id == peliId);
},

// E

peliculasPorGenero: function(generoABuscar){
	return this.listarPelículas(this
	.peliculas
	.filter(pelicula => pelicula.genero == generoABuscar),0);
},

// F

filtrarPorCalificacion: function(min, max){
	return this.listarPelículas(this
	.peliculas
	.filter(pelicula => pelicula.calificacionIMDB>=min && pelicula.calificacionIMDB<=max),0);
},

// G

ordenarPorDuracion: function(){
	let ordenaditas = this
			.peliculas
			.sort((p1, p2) => p2.duracion - p1.duracion);
		return this.listarPelículas(ordenaditas,0);
},

// H

duracionPromedio: function(){
	let duracionProm = this.peliculas.reduce((suma, pelicula) => suma += pelicula.duracion, 0);
	return "El promedio de duración de las películas es de: "+duracionProm / this.peliculas.length + " minutos.";
},

// I

modificarGeneroPorId: function(idPeliACambiar, nuevoGenero){
	let peliACambiar = this.buscarPorId(idPeliACambiar);
		peliACambiar.genero = nuevoGenero;
	let escritura = archivo.escribirJson("peliculas", this.peliculas);
		return peliACambiar;
}

}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí
gestionDePeliculas.listarPelículas(arrayPeliculas)
console.log(o);

console.log(v, oo + " .D. Buscar");
// Ejecución aquí
console.table(gestionDePeliculas.buscarPorId(10)); 
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí
gestionDePeliculas.peliculasPorGenero("Horror");
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí
gestionDePeliculas.filtrarPorCalificacion(7,8);
console.log(o);

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí 
gestionDePeliculas.ordenarPorDuracion();
console.log(o);

console.log(v, oo + " .H. Duracion");
// Ejecución aquí
console.log(gestionDePeliculas.duracionPromedio());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí
console.table(gestionDePeliculas.modificarGeneroPorId(10,"Gore"));
console.log(o);
