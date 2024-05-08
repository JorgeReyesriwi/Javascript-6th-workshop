const url = "/section4/reto1/data.json";

// Función para cargar y mostrar el contenido de data.json
function cargarDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar los datos.')
          }
          return response.json()
        })
        .then((data) => {
          console.log('Habitaciones:', data.rooms)
          console.log('Tipos de Habitaciones:', data.roomTypes)
          habitaciones = data.rooms
          resolve(data)
        })
        .catch((error) => {
          console.error(error)
          reject(error)
        })
    }, 3000)
  })
}

//Codigo jorgito
let habitaciones = []
let reservas = []

function generarNumeroReserva() {
  return Math.floor(Math.random() * 1000) + 1
}

function verificarDisponibilidad(numeroHabitacion) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const habitacion = habitaciones.find(room => room.number === numeroHabitacion)
      if (habitacion && habitacion.availability) {
        resolve()
      } else {
        reject("La habitacion no esta disponible en este momento.")
      }
    }, 2000)
  })
}

function crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped, cantidadPersonas) {
  verificarDisponibilidad(numeroHabitacion)
    .then(() => {
      const habitacion = habitaciones.find(room => room.number === numeroHabitacion)
      if (!habitacion) {
        console.log("La habitacion no existe.")
        return
      }

      if (cantidadPersonas > habitacion.capacity) {
        console.log("La habitacion no tiene suficiente capacidad para el numero de personas especificado.")
        return
      }

      const numeroReserva = generarNumeroReserva()

      const reserva = {
        numero: numeroReserva,
        numeroHabitacion,
        fechaInicio,
        fechaFin,
        huesped: huesped.toLowerCase(),
        cantidadPersonas,
        estado: "confirmada"
      };

      reservas.push(reserva);

      console.log("Reserva creada correctamente. Número de reserva:", numeroReserva)
    })
    .catch(error => {
      console.error(error)
    })
}

function reservarHabitacion() {
  const cantidadPersonas = parseInt(prompt("¿Cuántas personas se alojarán?"))
  if (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
    console.log("Ingrese un número válido de personas.")
    return
  }

  cargarDatos()
  .then(({ rooms, roomTypes }) => {
    const habitacionesDisponibles = rooms.filter(room => {
      const tipoHabitacion = roomTypes.find(type => type.id === room.roomTypeId)
      return tipoHabitacion.capacity >= cantidadPersonas && room.availability
    })

    if (habitacionesDisponibles.length === 0) {
      console.log("No hay habitaciones disponibles para la cantidad de personas especificada.")
      return;
    }

    console.log("Habitaciones disponibles:")
    habitacionesDisponibles.forEach(room => {
      console.log(`Numero de Habitacion: ${room.number}`)
      const tipoHabitacion = roomTypes.find(type => type.id === room.roomTypeId)
      console.log(`Tipo: ${tipoHabitacion.name}`)
    })

      const numeroHabitacion = parseInt(prompt("Ingrese el numero de habitacion a reservar:"));
      if (isNaN(numeroHabitacion) || !habitacionesDisponibles.find(room => room.number === numeroHabitacion)) {
        console.log("Ingrese un numero de habitacion valido.")
        return
      }

      const fechaInicio = prompt("Ingrese la fecha de inicio de la reserva (YYYY-MM-DD):")
      const fechaFin = prompt("Ingrese la fecha de fin de la reserva (YYYY-MM-DD):")

      const huesped = prompt("Ingrese su nombre completo:")

      crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped, cantidadPersonas)
    })
    .catch(error => {
      console.error("Error al cargar los datos:", error)
    })
}

function verReservas(nombreCompleto) {
  const reservasFiltradas = reservas.filter(reserva => reserva.huesped === nombreCompleto.toLowerCase())

  if (reservasFiltradas.length === 0) {
    console.log("No hay reservas para el huésped especificado.")
    return
  }

  console.log("Reservas para", nombreCompleto + ":")

  reservasFiltradas.forEach(reserva => {
    const habitacion = habitaciones.find(room => room.number === reserva.numeroHabitacion)
    const tipoHabitacion = roomTypes.find(type => type.id === habitacion.type)
    console.log("Numero de Reserva:", reserva.numero)
    console.log("Numero de Habitacion:", reserva.numeroHabitacion)
    console.log("Tipo de Habitacion:", tipoHabitacion.name)
    console.log("Fecha de Inicio:", reserva.fechaInicio)
    console.log("Fecha de Fin:", reserva.fechaFin)
    console.log("Estado de la Reserva:", reserva.estado)
  })
}

function cancelarReserva(numeroReserva) {
  const indiceReserva = reservas.findIndex(reserva => reserva.numero === numeroReserva)

  if (indiceReserva === -1) {
    console.log("No se encontro ninguna reserva con el número especificado.")
    return;
  }

  const confirmacion = confirm("¿Esta seguro de que desea cancelar la reserva?")
  if (confirmacion) {
    reservas.splice(indiceReserva, 1)
    console.log("Reserva cancelada correctamente.")
  } else {
    console.log("La cancelacion de la reserva fue cancelada por el usuario.")
  }
}

function editarReserva(numeroReserva, nuevaFechaInicio, nuevaFechaFin) {
  const reserva = reservas.find(reserva => reserva.numero === numeroReserva)

  if (!reserva) {
    console.log("No se encontro ninguna reserva con el numero especificado.")
    return
  }

  const confirmacion = confirm("¿Esta seguro de que desea editar la reserva?")
  if (confirmacion) {
    reserva.fechaInicio = nuevaFechaInicio
    reserva.fechaFin = nuevaFechaFin
    console.log("Reserva editada correctamente.")
  } else {
    console.log("La edicion de la reserva fue cancelada por el usuario.")
  }
}

reservarHabitacion()