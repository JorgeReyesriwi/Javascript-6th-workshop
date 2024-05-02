console.log("A continuación, se muestra un código JavaScript:")
console.log(`
console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");`)

const ordenPredicho = prompt("Por favor, predice el orden en que se mostrarán los mensajes en la consola y escribe cada mensaje exactamente igual a como se ve. Separa cada mensaje con una coma y un espacio.")

const ordenReal = [
  "Inicio del script",
  "Fin del script",
  "Promesa resuelta",
  "Primer setTimeout",
  "Segundo setTimeout"
]

const ordenUsuario = ordenPredicho.split(", ").map(msg => msg.trim())

if (JSON.stringify(ordenUsuario) === JSON.stringify(ordenReal)) {
  console.log("¡Felicitaciones! Acertaste el orden de los mensajes en la consola.")
} else {
  let errores = 0
  let mensajeError = "Lo siento, hubo errores en tu predicción:\n"

  ordenReal.forEach((mensaje, indice) => {
    if (ordenUsuario[indice] !== mensaje) {
      errores++;
      mensajeError += `Error en el paso ${indice + 1}: Debería ser "${mensaje}"\n`
    }
  })

  if (errores === 1) {
    mensajeError += "Solo cometiste un error. Revisa el paso incorrecto."
  } else if (errores > 1) {
    mensajeError += `Cometiste ${errores} errores. Revisa los pasos incorrectos.`
  }

  console.log(mensajeError)
}
