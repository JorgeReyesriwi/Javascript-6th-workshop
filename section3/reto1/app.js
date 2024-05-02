function crearContador() {
  let contador = 0

  return {
    incrementar: function() {
      contador++
      console.log("Contador incrementado:", contador)
    },
    obtenerValor: function() {
      console.log("Valor actual del contador:", contador)
    }
  }
}

const contador = crearContador()

while (true) {
  const accion = prompt("¿Deseas incrementar el contador? (Si/No)")

  if (accion.toLowerCase() === "si") {
    contador.incrementar()
  } else if (accion.toLowerCase() === "no") {
    contador.obtenerValor()
    break
  } else {
    console.log("Opcion invalida. Por favor, responde 'Si' o 'No'.")
  }
}
