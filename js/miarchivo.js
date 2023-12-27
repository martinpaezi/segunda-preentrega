const jugadoresEstudiantes = [
  { nombre: "Mariano", apellido: "Andújar", precio: 2000000, posicion: "Portero" },
  { nombre: "Jorge", apellido: "Rodríguez", precio: 2000000, posicion: "Mediocampista" },
  { nombre: "Leonardo", apellido: "Godoy", precio: 2000000, posicion: "Defensor" },
  { nombre: "Benjamín", apellido: "Rollheiser", precio: 2000000, posicion: "Mediocampista" },
  { nombre: "Gustavo", apellido: "Del Prete", precio: 2000000, posicion: "Delantero" },
  { nombre: "Agustín", apellido: "Rogel", precio: 2000000, posicion: "Defensor" },
  { nombre: "Eros", apellido: "Mancuso", precio: 2000000, posicion: "Defensor" },
  { nombre: "Zaid", apellido: "Romero", precio: 2000000, posicion: "Defensor" },
  { nombre: "Fernando", apellido: "Zuqui", precio: 2000000, posicion: "Mediocampista" },
  { nombre: "Santiago", apellido: "Ascacibar", precio: 2000000, posicion: "Mediocampista" },
  { nombre: "Mauro", apellido: "Boselli", precio: 2000000, posicion: "Delantero" },
  { nombre: "Guido", apellido: "Carrillo", precio: 2000000, posicion: "Delantero" },
  { nombre: "José", apellido: "Sosa", precio: 2000000, posicion: "Mediocampista" },
  { nombre: "Pablo", apellido: "Piatti", precio: 2000000, posicion: "Mediocampista" },
];

alert("El club de fútbol Estudiantes de La Plata necesita traer refuerzos, ayudalo eligiendo")

const listadoJugadores = [
  { nombre: "Augusto", apellido: "Batalla", precio: 2000000, posicion: "Arquero" },
  { nombre: "Ezequiel", apellido: "Unsain", precio: 2000000, posicion: "Arquero" },
  { nombre: "Agustín", apellido: "Rogel", precio: 2000000, posicion: "Defensor" },
  { nombre: "Leonardo", apellido: "Jara", precio: 2000000, posicion: "Defensor" },
  { nombre: "Leonel", apellido: "Vangioni", precio: 2000000, posicion: "Defensor" },
  { nombre: "Rubén", apellido: "Botta", precio: 2000000, posicion: "Mediocampista" },
  { nombre: "Leandro", apellido: "Díaz", precio: 2000000, posicion: "Delantero" },
  { nombre: "Mateo", apellido: "Retegui", precio: 2000000, posicion: "Delantero" },
  { nombre: "Enzo", apellido: "Pérez", precio: 2000000, posicion: "Mediocampista" },
];

let respuesta;

while (respuesta !== -1) {
  respuesta = Number(prompt("Elige una opción:\n1-Comprar jugador\n2-Ver plantilla de jugadores de Estudiantes\n3-Listo"));

  switch (respuesta) {
    case 1:
      comprarJugador();
      break;
    case 2:
      verJugadores();
      break;
    case 3:
      respuesta = -1;
      break;
    default:
      alert("Opción no encontrada, probar de vuelta");
  }
}

function comprarJugador() {
  const seleccion = prompt("Selecciona el número del jugador que deseas agregar:\n" +
                           listadoJugadores.map((jugador, index) => `${index + 1}. ${jugador.apellido}`).join("\n"));

  const numSeleccionado = parseInt(seleccion) - 1;

  if (!isNaN(numSeleccionado) && numSeleccionado >= 0 && numSeleccionado < listadoJugadores.length) {
    const jugadorSeleccionado = listadoJugadores.splice(numSeleccionado, 1)[0];
    jugadoresEstudiantes.push(jugadorSeleccionado);
    alert(`Jugador ${jugadorSeleccionado.nombre} ${jugadorSeleccionado.apellido} seleccionado.`);
  } else {
    alert("Selección no válida. Intentalo de nuevo.");
  }
}

function verJugadores() {
  if (jugadoresEstudiantes.length > 0) {
    alert("Lista de jugadores de Estudiantes de La Plata:\n" +
          jugadoresEstudiantes.map(jugador => `${jugador.nombre} ${jugador.apellido} - ${jugador.posicion}`).join("\n"));
  } else {
    alert("Aún no has seleccionado jugadores.");
  }
}
