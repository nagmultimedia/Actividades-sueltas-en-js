
let fs= require('fs');
let nomArch= 'AUTOS.json';
let datos ; //no sabemos como mandar los datos aca, como String?

//console.log(arryAuti);
//console.log(contenido);

let leerJson = function(nomArch){
	let contenido= fs.readFileSync(nomArch,{encoding: 'utf-8'});
	return JSON.parse(contenido);
}

//console.log(leerJson(nomArch));

let agregar = function(nomArch, datos){
	let agregaditos= fs.appendFileSync(nomArch, datos)
	return agregaditos;
}

const escribirJson = function (nomArch, datos) {
	let contenido= leerJson(nomArch);
	let arryAuti = contenido;
	let agreg= agregar(nomArch,datos);
	let sobreEsc= fs.writeFileSync(contenido, agreg);
	return sobreEsc;
}

console.log(escribirJson(nomArch, datos));