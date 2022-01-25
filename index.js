 '<h1> Time right now is: ' 

var nombre= "hola alvaro";
var edad = 19;
var isMenor = false;
var suledo = 1233.31;
var balonOro = [1,2,3,4,5,6];

let d = new Date();
if (edad > 18) {
console.log("Mi nombre " + nombre);
console.log("Mi sueldo " + suledo * edad);

}else{
	isMenor = true;
	if (isMenor == true) {
		console.log("Es menor de edad");
	}
}


for (var i = 0; i <= balonOro.length-1; i++) {
	if (i==4) {
			console.log("Aqui llego Cr7");
	}
	console.log(balonOro[i]);
	if (i==5) {
		console.log("Aqui llego Messi");
	}
}
 '</h1>'