const SALUD_MAXIMA = 10;
const HAMBRE_MINIMA = 0;
const DISMINUCION_SALUD = 4;
const DISMINUCION_HAMBRE = 3;
const SUENIO_MINIMO = 0;
const SUENIO_MAXIMO = 10;

const mascota = {
  nombre: "name",
  edad: 0,
  hambre: 0,
  salud: 10,
  cansancio:5,
  sigueConVida: function () {
    return this.edad < 15 && this.hambre < 10 && this.salud > 0 && this.cansancio <10;
  },
  vivir: function () {
    console.log("estoy viviendo...");
    this.edad += 1;
    this.hambre += 5;
    this.salud -= 3;
	this.cansancio+=1;
  },
  pasear: function () {
    console.log("a pasear...");
    if (this.salud + DISMINUCION_SALUD <= SALUD_MAXIMA) {
      this.salud += DISMINUCION_SALUD;
    } else {
      this.salud = SALUD_MAXIMA;
    }	
  },
  comer: function () {
    console.log("mmm ñam ñam..");
    if (this.hambre - DISMINUCION_HAMBRE >= HAMBRE_MINIMA) {
      this.hambre -= DISMINUCION_HAMBRE;
    } else {
      this.hambre = HAMBRE_MINIMA;
    }
  },
  checkeo: function () {
    let mens = ""
    if (this.salud >= 4 && this.hambre <= 4) {
      mens = "\nEstoy chévere!";
    }
    if (this.salud <= 3 && this.hambre >= 5) {
      mens = "\nme apachuché!";
    }
    if (this.hambre >= 5) {
      mens = "\ntengo hambre!";
    }
    if (this.salud <= 3) {
      mens = "\nsacame a pasear ameo!";
    }
	if (this.cansancio >= 8) {
		mens = "\nEstoy cansado!";
	  }
    console.log(mens);
  },
  status: function () {
    return { edad: this.edad, hambre: this.hambre, salud: this.salud, cansancio: this.cansancio }
  },
  dormir:function(){
	console.log("zzz zzz Ronk..");
    if (this.cansancio >= SUENIO_MINIMO) {
		this.cansancio -= 3;
	  } else {
		this.cansancio = SUENIO_MINIMO;
	  }
  }
};
module.exports = mascota;