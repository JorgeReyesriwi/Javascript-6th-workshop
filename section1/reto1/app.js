// Global Scope
const codeExample = `
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();`
alert("Vas a ver un codigo a continuacion y tienes que decir desde diferentes partes del codigo si es posible acceder a cada una de ellas")
alert(codeExample)

let userResponse1 = prompt("A qué variables puedo acceder en el scope global?\n1: A todas pues en el contexto global tengo acceso a todo el código\n2: Solo a las variables globales\n3: A ninguna");

switch (userResponse1) {
  case "1":
    alert("Incorrecto. En el scope global no puedes acceder a todas las variables.");
    break;
  case "2":
    alert("Correcto. En el scope global puedes acceder a las variables que están en el scope global, pero no a las que están declaradas en funciones o bloques.");
    break;
  case "3":
    alert("Incorrecto. En el scope global puedes acceder a las variables globales.");
    break;
  default:
    alert("Por favor, ingresa una opción válida.");
}


let userResponse2 = prompt("A qué variables puedo acceder en el scope de la función?\n1: A todas pues en el contexto de la función tengo acceso a todo el código\n2: A la variable global y a la de la función\n3: A la blockVariable");

switch (userResponse2) {
  case "1":
    alert("Incorrecto. No puedes acceder a todas las variables en el scope de la función.");
    break;
  case "2":
    alert("Correcto. En el scope de la función puedes acceder a la variable global y a la de la función.");
    break;
  case "3":
    alert("Incorrecto. No puedes acceder a la variable blockVariable en el scope de la función.");
    break;
  default:
    alert("Por favor, ingresa una opción válida.");
}                                                                                                                                                               

let userResponse3 = prompt("A qué variables puedo acceder en el scope del blockVariable?\n1: A todas pues en el contexto Block tengo acceso a las variables globales, las de la función y a la del Block\n2: Solo a la del blockVariable\n3: A la global nada más");

switch (userResponse3) {
  case "1":
    alert("Correcto. En el blockVariable tienes acceso tanto a las variables globales como las de la función.");
    break;
  case "2":
    alert("Correcto. En el scope del blockVariable solo puedes acceder a las variables del blockVariable.");
    break;
  case "3":
    alert("Incorrecto. En el scope del blockVariable solo puedes acceder a la variable del blockVariable.");
    break;
  default:
    alert("Por favor, ingresa una opción válida.");
}