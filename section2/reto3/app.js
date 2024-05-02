function manejarAsincronia(callback, promise) {
    promise
        .then(() => {
            callback("Promesa cumplida y callback")
        })
        .catch(() => {
            callback("Promesa rechazada")
        })
}

function miCallback(mensaje) {
    console.log(mensaje)
}

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 5000)
})

manejarAsincronia(miCallback, miPromesa);
