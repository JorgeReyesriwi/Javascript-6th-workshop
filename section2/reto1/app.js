function crearSumador(numInitial) {
    return function(num) {
        return numInitial + num
    }
}

const sumarCinco = crearSumador(5)

const resultado = sumarCinco(3)

console.log(`El resultado de sumar 5 más 3 es: ${resultado}`)
