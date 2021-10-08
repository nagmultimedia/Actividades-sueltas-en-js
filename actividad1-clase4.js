// actividad1-clase4.js
// tilde francesa ``


// actividad bañarse:

let temperaturaAgua= 38.5;
let tipoJabon= "liquido";
let cantidadDeToallas= 2;
let tiempoDeBanio= 15.3;
let marcaShampoo= "Tresemee";


// actividad armarMate
let temperaturaAgua2=85;
let tamanioMate= "mediano";
let materialMate= "madera";
let amargo= false;
let yerbaSaborizada= true;
let bizcochos= true;

//la mejor opcion es console.log(nomVariable) porque el resultado va a variar 
// con el valor de la variable.


// actividad cajon:

let cajonPantalones= "r";
let cajonRemeras= "p";
let cajonAuxiliar;

cajonAuxiliar= cajonPantalones;
cajonPantalones=cajonRemeras;
cajonRemeras= cajonAuxiliar;

//console.log(cajonPantalones,cajonRemeras);


// actividades playground: 

// pisar variables:

let edadMinima= 18;
let capacidadMaxima= 1000;

edadMinima=21;
capacidadMaxima=800;

// variables numericas:
let uno=1;
let dos= uno;
uno=2;

// el resultado es 1 para la variable dos.
//console.log(dos);

// mensaje con variables:

let nombre= "Nati", 
edad= 34,
cumpleanios= "20/09",
ciudad= "CABA",
ocupacion= "dibujantePlanos",
hobbie= "leer";

console.log(`mi nombre es ${nombre} y tengo ${edad}. Cumplo años el ${cumpleanios}, vivo en ${ciudad}, donde me dedico a ${ocupacion} y si tengo tiempo me gusta ${hobbie}`);

// calculadora de edad

let edadArray= [5, 45, 57, 99];

for(let i=0 ; edadArray[i]>edadArray.length; i ++) {
	let diasVividos= edadArray[i]*365;
	console.log(diasVividos);
}

// suma de valores:
let num1_, num2_, resultado;
num1_= 1;
num2_= 2;
resultado= num1_ + num2_ ;

console.log(resultado);


// calculador abastecimiento de por vida:
// ejercicio1:

let edadNati=34, edadMaximaNati=80, snackFavorito="papitas", 
snackPorDia=0.3, snacksRestantes=snackPorDia*((edadMaximaNati-edadNati)*365);
let valorSnack= 0.5;
let valorSnackRestante= valorSnack*snacksRestantes;
console.log(`Vas a necesitar ${snacksRestantes} snacks para que te alcancen hasta los ${edadMaximaNati} años y vas a gastar ${valorSnackRestante} hasta entonces`);

// actividad 2:

let cantidadDiasVacaciones= 10, presupuestoMaximo=25000, comida, 
cantidadComidas= cantidadDiasVacaciones*3, gastosDeComida= (presupuestoMaximo-15000)/cantidadComidas;

console.log (`Podés gastar ${gastosDeComida} en cada comida
para que te alcance la plata durante los ${cantidadDiasVacaciones} días de viaje.`);


// calculador IMC

let nombres=["nicolas", "esteban", "jose", "juana"];
let apellidos=["lopez", "piazza", "fermoso", "fernandez"];
let edades=[27, 28, 33, 26];
let pesos=[83.5, 80.1, 63.7, 55];
let alturas=[170, 176, 153, 162];
let prePagas=["swiss medical", "osde", "no tiene", "omint"];

// las variables son las edades=number, los pesos=number float, las alturas=number float y las prepagas= "strings"
// las cibstabtes son los nombres y apellidos= Strings en ambos casos
// podrian ser nulls kas edades o las prepagas (en realidad cualquiera que no sea peso y altura para poder sacar el imc)
// for(let i=0 ; edadArray[i]>edadArray.length; i ++) {

for(let j=0; edades[j]<edades.length; j ++){
	let peso=pesos[j];
	let altura=alturas[j];
	let pesoAlt= peso/altura;
	let imc=Math.pow(pesoAlt,2);
	console.log(`${nombre[j]} ${apellido[j]} tiene un IMC de ${imc} .`);
	console.log("Entre");
}
