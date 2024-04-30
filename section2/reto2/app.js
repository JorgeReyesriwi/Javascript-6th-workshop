console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());

// ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
// Cuando intentamos llamar a las funciones antes de su declaracion, la funcion declarada se ejecuta sin errores mientras que la funcion expresada arroja un error.


// ¿Cómo difieren los resultados entre la función declarada y la función expresada? 
// La funcion declarada puede ser llamada antes de su declaracion sin errores, mientras que la funcion expresada arroja un error al intentar llamarla antes de su declaracion


// ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
// La diferencia refleja como Js trata el hoisting con las declaraciones de las funciones. Las funciones declaradas tienen sus valores definidos completamente hoisted, permitiendo acceder a ellas antes de declararlas, por otro lado las funciones expresadas solo tienen la declaracion de la variable hoisted, no la asignacion de la funcion en si, lo que impide que podamos acceder a ella antes de que la inicialicen