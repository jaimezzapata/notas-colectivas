import { obtenerDatos, guardarDatos } from "./storageService.js";
import { protegerRuta } from "./userService.js";

// 🧠 Verifica sesión activa
const usuarioActivo = protegerRuta()
if (!usuarioActivo) {
  window.location.href = "./login.html";
}

// 📝 Maneja la creación del formulario
const formulario = document.getElementById("formNota");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const contenido = e.target.contenido.value.trim();
  if (!contenido) {
    alert("El contenido de la nota no puede estar vacío.");
    return;
  }

  // Obtener y actualizar base de datos
  const db = obtenerDatos();

  const nuevaNota = {
    id: Date.now(),
    contenido,
    creadaPor: usuarioActivo.nombre,
    fechaCreacion: new Date().toISOString(),
    historialEdiciones: [] // Historial vacío al crear
  };

  db.notas.push(nuevaNota);
  guardarDatos(db);

  window.location.href = "./tablero.html";
});

const btnCerrarSesion = document.getElementById("btnCerrarSesion");
btnCerrarSesion?.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.href = "./login.html";
});