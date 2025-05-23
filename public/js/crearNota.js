import { obtenerDatos, guardarDatos } from "./storageService.js";
import { protegerRuta } from "./userService.js";
import { alertaError, alertaExito } from "./utils.js";

// Proteger la vista
const usuarioActivo = protegerRuta();
if (!usuarioActivo) {
  window.location.href = "/login.html";
}

const formulario = document.getElementById("formNota");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const contenido = e.target.contenido.value.trim();
  if (!contenido) {
    return alertaError("Campo vacío", "El contenido de la nota no puede estar vacío.");
  }

  const db = obtenerDatos();

  const nuevaNota = {
    id: Date.now(),
    contenido,
    creadaPor: usuarioActivo.nombre,
    fechaCreacion: new Date().toISOString(),
    historialEdiciones: []
  };

  db.notas.push(nuevaNota);
  guardarDatos(db);

  alertaExito("Nota guardada", "Tu nota fue registrada con éxito.");

  setTimeout(() => {
    window.location.href = "/tablero.html";
  }, 1500);
});

// 🔐 Cierre de sesión
const btnCerrarSesion = document.getElementById("btnCerrarSesion");
btnCerrarSesion?.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.href = "/login.html";
});
