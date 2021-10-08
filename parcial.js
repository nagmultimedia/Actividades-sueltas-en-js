// actividad 1

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

function convertirEnMayusculas(peliculas){
	for (let i=0; i< peliculas.length; i++) {
		peliculas[i]= peliculas[i].toUpperCase();
	}
	return peliculas;
}
// convertirEnMayusculas(peliculas)

// actividad 2

let agregadoDePelis= ["peli nueva1", "peli nueva2", "peli nueva3", "peli nueva4"]

function pasajeDeElementos(arr1, arr2){
	for (let i=arr2.length-1; i>=0 ; i--){
		arr1.push(arr2.pop().toUpperCase());
	}
	return arr1;
}
pasajeDeElementos(peliculas,agregadoDePelis);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

compararCalificaciones(asiaScores,euroScores);

function compararCalificaciones (asia, europa) {
	let comparacionesAsiaEuropa= [];

	for(let i=0; i<asia.length; i++){
		comparacionesAsiaEuropa[i]=asia[i]===europa[i];
		return comparacionesAsiaEuropa[i];
	}
}

//actividad clavadistas

let partA=[3,8,4,9,5], partB=[8,7,8,6,8], partC=[7,5,10,8,3];

function puntajePromedio(part){
	let pa=0;
	for(let i=0; i<5; i++){
		pa=pa+part[i];
	}
	pa=pa/part.length;
	return pa;
}

function puntajeMayor(part){

	let mpa=part[0];

	for(let i=0; i<part.length; i++){
		if(part[i]>mpa){mpa=part[i];}
	}
	return mpa;
}

function competencia(p1,p2,p3){
	let participantes=[p1,p2,p3];
	let mp=[], mpp=[];
	for(let i=0; i<participantes.length;i++){
		mp[i]=puntajePromedio(participantes[i]);
		mpp[i]=puntajeMayor(participantes[i])
	}

	let mpa=mp[0];mppa=[0], partmp=0, partmpp=0;

	for(let i=0; i<participantes.length;i++){
		if(mp[i]>mpa){mpa=mp[i];partmp=i}
		if(mpp[i]>mppa){mppa=mpp[i];partmpp=i}
	}

	return("mejor promedio: "+mpa +" del participante número "+ (partmp+1) 
	+ " y mejor alto puntaje " + mppa + " del participante numero: "+ (1+partmpp));

}

console.log(competencia(partA,partB,partC));


