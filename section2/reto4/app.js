console.log("Mensaje 1")

setTimeout(function() {
  console.log("Mensaje 2: -setTimeout 0 segundos")
}, 0)

setTimeout(function() {
  console.log("Mensaje 3: -setTimeout 1 segundo")
}, 1000);

// Entonces, tenemos que a pesar de que mensaje 2 tiene 0 segundos no se ejecuta directamente despues de mensaje 1 porque al ser una macrotarea(Una task asincrona) entra en el event loop

// Practica extra
// // Tareas síncronas
// console.log("Tarea 1: Síncrona");
// console.log("Tarea 2: Síncrona");
// console.log("Tarea 3: Síncrona");

// // Microtarea 1
// Promise.resolve().then(function() {
//   console.log("Microtarea: Una promesa")
// })

// Promise.resolve().then(function() {
//   console.log("Microtarea: Otra promesa")
  
//   setTimeout(function() {
//     console.log("setTimeout de 5 segundos: aunque setTimeout genera una macrotarea, al estar dentro de una microtarea pasa a hacer parte de la misma")
//   }, 5000)
// })


// // Macro tarea 1
// setTimeout(function() {
//   console.log("Macro tarea 1")
// }, 0)

// // Macro tarea 2
// setTimeout(function() {
//   console.log("Macro tarea 2: setTimeout que indica que el programa termina")
// }, 8000)

// console.log("Tarea 4: Síncrona")

