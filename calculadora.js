// INTEGRANTES EQUIPO 1
// EZEQUIEL SAFDIE
// NATACHA MARTINEZ GERMAIN
// JUAN MANUEL CHILITO
// JENNIFER COLMAN
// MATIAS MENONI
// ANDRES CORREDOR


let sumar = (a, b) =>{
	return a+b;
}

let restar = (a, b) =>{
	return a-b;
}

let multiplicar = (a, b) =>{
	return a*b;
}

let dividir = (a, b) =>{
	return a/b;
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

console.log(sumar(1,2));
console.log(restar(1,2));
console.log(multiplicar(1,2));
console.log(dividir(1,0));
console.log(dividir(1,2));


console.log("Calculadora - Nivel III - Funciones extras");

function cuadradoDeUnNumero(a){
	return multiplicar(a,a);
}

console.log(cuadradoDeUnNumero(2));

function promedioDeTresNumeros(a,b,c){
	let suma= sumar(a,sumar(b,c));
	return dividir(suma,3);
}

console.log(promedioDeTresNumeros(1,2,3));

function calcularPorcentaje(a,b){
	let porc=multiplicar(a,b);
	return dividir(porc,100);
}

console.log(calcularPorcentaje(300,15));

function GeneradorDePorcentaje(a,b){
	let porc=multiplicar(a,100);
	return dividir(porc,b)
}

console.log(GeneradorDePorcentaje(4,2));

