let archivos = require("./lecturaEscritura");

let arrayDepartamentos = archivos.leerJson("departamentos");

let inmobiliaria = {
    departamentos: arrayDepartamentos,

    listarDepartamentos:function (array) {
        array.forEach(
             elemento => { 
                 let disponible = elemento.disponible ? "Disponible" : "Alquilado"
                 console.log(`id: ${elemento.id}, precio $ ${elemento.precioAlquiler}, ${disponible}, ${elemento.ambientes} ambientes`) } )
    },

    buscarPorId:function (id) {
        let departamentoBuscado = this.departamentos.find(elemento => elemento.id === id )
        return departamentoBuscado
    },

    departamentosNoDisponibles:function() {
        let departamentosNoDispo = this.departamentos.filter(elemento => elemento.disponible === false);
        return departamentosNoDispo
    },

    departamentosDisponibles:function(){
        let departamentosDispo = this.departamentos.filter(elemento => elemento.disponible === true);
        return departamentosDispo
    },
    
    filtrarPorAmbiente:function (ambiente) {
        let ambientesMayor = this.departamentos.filter(elemento => elemento.ambientes >= ambiente )
        return ambientesMayor
    },

    filtrarPorPrecio:function (precio) {
        let depasDisponibles = this.departamentosDisponibles()  
        let depasPorPrecio = depasDisponibles.filter(elemento => elemento.precioAlquiler <= precio);
        return depasPorPrecio
    },
    rebajarPrecioAlquiler:function (descuento) {
        let depasDisponibles = this.departamentosDisponibles()
        let depasConDescuento = depasDisponibles.map(elemento  => {
            return {...elemento, precioAlquiler: elemento.precioAlquiler * ((100 - descuento))/100}
        });
        helper.escribirJson("departamentos", this.departamentos);
        return depasConDescuento
    },
	calcularRecaudación :function(){
		let departamentosNoDispo=this.departamentosNoDisponibles();
		let sumaRecaud= departamentosNoDispo.reduce((suma,departamento)=>suma+=departamento.precioAlquiler,0);
		return sumaRecaud;
	},
	ordenarPorPrecio :function(array){
		let ordenaditos= array.sort((d1,d2)=>d1.precioAlquiler-d2.precioAlquiler);
		return ordenaditos;
	}
};

// B
//inmobiliaria.listarDepartamentos(arrayDepartamentos);

//C 
//console.log(inmobiliaria.buscarPorId(3));

// D 
//console.log(inmobiliaria.departamentosNoDisponibles());

//E
//console.log(inmobiliaria.departamentosDisponibles());

//f
/* console.log(inmobiliaria.filtrarPorAmbiente(2)); */

//g
/* console.log(inmobiliaria.filtrarPorPrecio(30000)); */

// H 
//console.log(inmobiliaria.rebajarPrecioAlquiler(10));

//i
//console.log(inmobiliaria.calcularRecaudación());

//j
console.log(inmobiliaria.ordenarPorPrecio(arrayDepartamentos));

