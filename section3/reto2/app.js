function mostrarMensajeDespuesDeNsegundos() {
  const segundos = parseInt(prompt("Ingrese el número de segundos:"))

  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, segundos * 1000)
  });

  promesa.then(() => {
    console.log(`¡Han pasado ${segundos} segundos!`)
  })
}

mostrarMensajeDespuesDeNsegundos()

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if (!response.ok) {
      throw new Error("Error al cargar los datos")
    }
    return response.json();
  })
  .then(data => {
    console.log("Datos cargados exitosamente:", data) 
  })
  .catch(error => {
    console.error("Error:", error.message)
  });
