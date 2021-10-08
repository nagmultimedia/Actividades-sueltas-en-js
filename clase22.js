/* Mesa 4

Stefanie Salamanca, Javier Triana, Matias Menoni, Natacha Martinez */

const {
	table
} = require("console");
const archivos = require("./lecturaEscritura");
let arrayautos = archivos.leerJson("autos1");

//console.table(arrayautos);
let carrera = {
	autos: arrayautos,
	autosXTanda: 6,

	autosHabilitados: function () {
		let noSancionados = this
			.autos
			.filter(auto => auto.sancionado == false)
		return noSancionados;
	},
	listarAutos: function (array) {
		let listado = array.forEach((auto, indice) => {
			console.log(
				"Piloto: " + auto.piloto + ", patente: " + auto.patente + ", velocidad: " +
				auto.velocidad + ", peso en Kg.: " + auto.peso + ", estado: " + (
					auto.sancionado ?
					"sancionado" :
					"habilitado"
				)
			);
		});

	},
	buscarPorPatente: function (patente) {
		return this
			.autos
			.find(auto => auto.patente == patente);
	},
	filtrarPorCilindrada: function (maxCil) {
		let listHab = this.autosHabilitados();
		let filtPorCil = listHab.filter(auto => auto.cilindrada <= maxCil);
		return filtPorCil;
	},
	ordenarPorVelocidad: function () {
		let ordenaditos = this
			.autos
			.sort((a1, a2) => a1.velocidad - a2.velocidad);
		return ordenaditos;
	},
	habilitarVehiculo: function (patAHab) {
		let vehiculoAHabilitar = this
			.autos
			.find(auto => auto.patente == patAHab);
		vehiculoAHabilitar.sancionado = false;
		let escritura = archivos.escribirJson("autos1", this.autos);
		return vehiculoAHabilitar;
	},
	generarTanda: function (maxCil, maxPes) {
		let listHabMasCil = this.filtrarPorCilindrada(maxCil);
		let tandaA;
		tandaA = listHabMasCil.filter(auto => auto.peso <= maxPes);
		return tandaA;
	},
	pesoPromedio: function (tanda) {
		let pesoProm = tanda.reduce((suma, auto) => suma += auto.peso, 0);
		return pesoProm / tanda.length;
	},
	listarPodio: function (array) {
		let ordenaditosPorPiloto = array.sort((p1, p2) => p2.puntaje - p1.puntaje)
		return ordenaditosPorPiloto;
	}
}

// console.table(carrera.autosHabilitados());
// console.table(carrera.listarAutos(arrayautos));
// console.log(carrera.buscarPorPatente("JQK433"));
// console.table(carrera.filtrarPorCilindrada(2000));
// console.table(carrera.ordenarPorVelocidad());
// console.table(carrera.habilitarVehiculo("JQK433"));
// console.table(carrera.generarTanda(12000,12500));// ni idea de como cortar en
// el auto 6

let tandaPaenviar = carrera.generarTanda(1500, 2000);
//console.log(carrera.pesoPromedio(tandaPaenviar));
//console.log(carrera.listarPodio(tandaPaenviar)); // ni idea de como cortar en el auto 3