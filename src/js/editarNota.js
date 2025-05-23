import { obtenerDatos, guardarDatos } from "./storageService.js";
import { protegerRuta } from "./userService.js";

// 🧠 Verificar sesión
const usuarioActivo = protegerRuta();
if (!usuarioActivo) {
  window.location.href = "./login.html";
}

// 📍 Obtener ID desde URL
const params = new URLSearchParams(window.location.search);
const idNota = parseInt(params.get("id"));

if (!idNota || isNaN(idNota)) {
  window.location.href = "./error.html?code=400&title=ID inválido&msg=La nota que intentas editar no tiene un ID válido.";
}

// 📋 Obtener la nota
const db = obtenerDatos();
const nota = db.notas.find(n => n.id === idNota);
if (!nota) {
  window.location.href = "./error.html?code=404&title=Nota no encontrada&msg=La nota solicitada no existe.";
}

// 🎯 Mostrar contenido actual
const textarea = document.getElementById("contenido");
textarea.value = nota.contenido;

// 💾 Guardar edición
const formEditar = document.getElementById("formEditar");

formEditar.addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevoContenido = textarea.value.trim();
  if (!nuevoContenido) {
    alert("El contenido no puede estar vacío.");
    return;
  }

  // Actualizar contenido
  nota.contenido = nuevoContenido;

  // Asegurar historial
  if (!nota.historialEdiciones) {
    nota.historialEdiciones = [];
  }

  nota.historialEdiciones.push({
    editadaPor: usuarioActivo.nombre,
    fechaEdicion: new Date().toISOString()
  });

  guardarDatos(db);

  window.location.href = "./tablero.html";
});
const btnCerrarSesion = document.getElementById("btnCerrarSesion");
btnCerrarSesion?.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.href = "./login.html";
});
