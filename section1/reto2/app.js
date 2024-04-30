alert(`Vas a analizar el siguiente codigo y determinar que pasaria si imprimimos cada uno de esos valores
// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`)
// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

let predA = prompt("¿Cuál crees que será el valor de 'a':\n1: undefined \n2: 1")
let predB = prompt("¿Cuál crees que será el valor de 'b':\n1: Error \n2: 2")
let predC = prompt("¿Cuál crees que será el valor de 'c':\n1: Error \n2: 3")
let predFuncDeclarada = prompt("¿Qué crees que devolverá la función 'funcionDeclarada()': \n1: Funcion declarada a sido llamada\n2: Error")
let predFuncExpresada = prompt("¿Qué crees que devolverá la función 'funcionExpresada()'\n1: Funcion expresada a sido llamada\n2: Error?")

console.log("Valor de a:", a)
if (predA === "1") {
  console.log("Correcto. 'a' tiene el valor undefined.")
} else {
  console.log("Incorrecto. 'a' tiene el valor undefined.")
}

console.log("Valor de b:", b)
if (predB === "1") {
  console.log("Correcto. Se produce un error al intentar acceder a 'b' antes de su declaracion.")
} else {
  console.log("Incorrecto. Se produce un error al intentar acceder a 'b' antes de su declaracion.")
}

console.log("Valor de c:", c)
if (predC === "1") {
  console.log("Correcto. Se produce un error al intentar acceder a 'c' antes de su declaracion.")
} else {
  console.log("Incorrecto. Se produce un error al intentar acceder a 'c' antes de su declaracion.")
}

console.log("Resultado de funcionDeclarada:", funcionDeclarada())
if (predFuncDeclarada === "Función declarada ha sido llamada.") {
  console.log("Correcto. La funcion 'funcionDeclarada()' devuelve 'Funcion declarada ha sido llamada.'")
} else {
  console.log("Incorrecto. La funcion 'funcionDeclarada()' devuelve 'Funcion declarada ha sido llamada.'")
}

console.log("Resultado de funcionExpresada:", funcionExpresada())
if (predFuncExpresada === "Error") {
  console.log("Correcto. Se produce un error al intentar llamar a 'funcionExpresada()' antes de su declaracion.")
} else {
  console.log("Incorrecto. Se produce un error al intentar llamar a 'funcionExpresada()' antes de su declaracion.")
}
