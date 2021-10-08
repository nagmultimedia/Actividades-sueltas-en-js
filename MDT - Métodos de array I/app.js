/*Mesa 5

Natacha Martinez
Alejandra Santamaria
Wiliam Ibarra
John Jimenez
Javier Triana
Jenifer Colman

*/


const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A

arrayProfesionales.forEach((profesional,indice)=>{
	//console.log(profesional.nombre+" - "+profesional.especialidad);
});

//B

arrayProfesionales.forEach((profesional,indice)=>{
	profesional.honorarioConsulta=+(profesional.honorarioConsulta*1.05);
});
//console.log(arrayProfesionales);

//C

let profesionalesDeshabilitados = arrayProfesionales.filter((profesional)=>!(profesional.estaHabilitado));
//console.log(profesionalesDeshabilitados);

//D

let profesionalesHabilitados  = arrayProfesionales.filter((profesional)=>profesional.estaHabilitado);
//console.log(profesionalesHabilitados);

//E

let arquitectos = arrayProfesionales.filter((profesional)=>profesional.especialidad=="Arquitecto");
//console.log(arquitectos );

//F

profesionalesDeshabilitados.filter((profesional)=>profesional.estaHabilitado=true);
//console.log(profesionalesDeshabilitados );

//G 

let cantidadTotalConsultas= arrayProfesionales.reduce((suma,profesional)=>suma+=profesional.cantidadConsultas,0);
//console.log(cantidadTotalConsultas);

//H 

let arrayRecaudacion=[];

arrayProfesionales.forEach((profesional,indice)=>{
	arrayRecaudacion.push({nombre: profesional.nombre, especialidad: profesional.especialidad, 
	recaudacion: (profesional.cantidadConsultas*profesional.honorarioConsulta)});
});

//console.log(arrayRecaudacion)

/*Utilizar un método de array que permita ordenar a los objetos de mayor a menor según la cantidad de
consultas atendidas para ello tendremos que tener en cuenta la propiedad  cantidadConsultas.
*/

console.log(arrayProfesionales.sort((p1, p2)=>p1.cantidadConsultas- p2.cantidadConsultas));

/*Utilizar un método de array que permita ordenar a los objetos de mayor a menor según la puntuación para 
ello tendremos que tener en cuenta la propiedad  puntuación, imprimir el resultado de este método.*/

console.log(arrayProfesionales.sort((p1, p2)=>p2.puntuacion- p1.puntuacion));

/*Utilizar un método de array que me permita buscar un objeto profesional dentro del array de profesionales 
según la propiedad identificador de cada objeto profesional, por ejemplo el profesional con identificador === 1, imprimir el resultado*/
console.log(buscarporId(arrayProfesionales, 14));

function buscarporId (array, numid){
	return array.find(profesional=>profesional.identificador == numid );
}
