const mascota = require("./mascota")
function esperar(ms) {
  let d = new Date();
  let d2 = null;
  do { d2 = new Date(); }
  while (d2 - d < ms);
}

mascota.checkeo();
while (mascota.sigueConVida()) {
  console.log(mascota.status());
  mascota.vivir();
  while(mascota.hambre>4){mascota.comer();}
  mascota.pasear();
  mascota.checkeo();
  esperar(2000);
  if(mascota.cansancio>8){mascota.dormir()}
}

console.log(!mascota.sigueConVida() ? "R.I.P. lo siento..." : "");
