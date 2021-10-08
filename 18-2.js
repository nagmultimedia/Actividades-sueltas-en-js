let saludo = {
    saludar : function (nombre, idioma) {
		return idioma(nombre)
	},
    esp: nombre => "Hola, " + nombre + " como estas hoy?",
    eng: eng = nombre => "Hello, " + nombre + " how are you today?",
    br: nombre => "Oi, " + nombre + " como você está hoje?",
    ger: nombre => "Hallo, " + nombre + " wie geht es dir heute?"
}


module.exports = saludo;