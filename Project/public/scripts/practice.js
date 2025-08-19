"use strict";
// Interface: only defines structure
var peso_kg = 40;
var altura_m = 1.70;
var imc = peso_kg / (altura_m * altura_m);
console.log("Segun la OMS, su condicion es:");
if (imc < 18.5) {
    console.log("Bajo peso.");
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal.");
}
else if (imc > 24.9 && imc < 30) {
    console.log("Sobrepeso.");
}
else if (imc >= 30 && imc <= 34.5) {
    console.log("Obesidad grado I.");
}
else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidad grado II.");
}
else {
    console.log("Obesidad grado III.");
}
