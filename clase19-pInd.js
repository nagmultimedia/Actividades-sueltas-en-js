
let electronicos = [
	{ nombre: 'iPad Pro 12"', precioEnUsd: 2200, cantVendidos: 15 },
	{ nombre: "Macbook Air", precioEnUsd: 1500, cantVendidos: 20 },
	{ nombre: "Macbook Pro", precioEnUsd: 3000, cantVendidos: 7 },
	{ nombre: "iPhone X", precioEnUsd: 650, cantVendidos: 150 },
	{ nombre: "iPhone 12", precioEnUsd: 1200, cantVendidos: 100 },
  ];

  /*Un método que nos permita calcular la ganancia total.
Un método que nos permita filtrar por cantidad de productos vendidos (aquellos productos cuya prop cantVendidos sea mayor o igual 
	que la cantidad ingresada por parámetro).
Un método que nos permita aumentar el precio en USD en un % que se indica por parámetro.
*/

let x=10;

console.log(electronicos.reduce((suma,electronic)=>suma=suma+(electronic.cantVendidos*electronic.precioEnUsd),0));
console.log(electronicos.filter((electronic)=>electronic.cantVendidos>=x));
function aumentar(porc){
electronicos.forEach(function(electronic, indice){
	console.log(electronic.precioEnUsd+=(electronic.precioEnUsd*porc));
});
}
aumentar(10);