import { obtenerDatos, guardarDatos } from "./storageService.js";
import { protegerRuta } from "./userService.js";

const usuarioActivo = protegerRuta();
if (!usuarioActivo) {
  window.location.href = "./login.html";
}

const params = new URLSearchParams(window.location.search);
const idNota = parseInt(params.get("id"));

if (!idNota || isNaN(idNota)) {
  window.location.href = "./error.html?code=400&title=ID inválido&msg=La nota que intentas editar no tiene un ID válido.";
}

const db = obtenerDatos();
const nota = db.notas.find(n => n.id === idNota);
if (!nota) {
  window.location.href = "./error.html?code=404&title=Nota no encontrada&msg=La nota solicitada no existe.";
}

const textarea = document.getElementById("contenido");
textarea.value = nota.contenido;

const formEditar = document.getElementById("formEditar");

formEditar.addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevoContenido = textarea.value.trim();
  if (!nuevoContenido) {
    alert("El contenido no puede estar vacío.");
    return;
  }

  nota.contenido = nuevoContenido;

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
