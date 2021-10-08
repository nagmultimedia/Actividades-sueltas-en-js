/*
1. !true------------> false
2. !false-----------> true
3. !!false---------->false
4. !!true----------->true
5. !1--------------->false
6. !!1-------------->true
7. !0--------------->true
8. !!0-------------->false
9. !!""------------->false
10.let x = 5 ;
let y = 9;
a. x < 10 && x!==5----->falso
b. x>9 || x===5-------->true
c. !(x===y)------------>true

true o false?

1. let x=10
let y ="a"
y==="b" || x >= 10----------------------------------->true
2. let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)------->true
3. let str = ""
let msj = "jaja!"
let esGracioso = "false"
!((str || msj) && esGracioso)------------------------>true


Code:
1. Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
debe ser mayor a 1,30 m.
*/
let altura =1.43;
let edad=15;

console.log(altura>=1.3 && edad>=12); 


/*
Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
debe usar el flash.
*/
let pocafLuz=true;
let demVelocidad=false;
console.log(pocafLuz || demVelocidad); 

/*
Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
parciales, o si obtiene un 4 en el examen final.
*/

let n1=5;
let n2=6;
let ef=4;
console.log((n1>=7 && n2>=7) || ef>=4);

/*
Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus
prácticas de piano y lo hizo de memoria.
*/
let tarea=true, piano=true, deMemoria=false;
	console.log(tarea && piano && deMemoria); 

