import { obtenerDatos, guardarDatos } from "./storageService.js";
import { protegerRuta } from "./userService.js";
import { confirmarAccion } from "./utils.js";

const usuarioActivo = protegerRuta();
if (!usuarioActivo) window.location.href = "./login.html";
document.getElementById("usuarioActivo").textContent = `👋 Hola, ${usuarioActivo.nombre}`;

const contenedorNotas = document.getElementById("contenedorNotas");
const formFiltros = document.getElementById("filtrosForm");

const db = obtenerDatos();
let notas = db.notas;

function renderizarNotas(lista) {
  contenedorNotas.innerHTML = "";
  lista.forEach(nota => contenedorNotas.appendChild(crearNotaCard(nota)));
}

contenedorNotas.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar-btn")) {
    const idNota = parseInt(e.target.dataset.id);

    confirmarAccion({
      titulo: "¿Eliminar nota?",
      texto: "Esta acción no se puede deshacer.",
      onConfirm: () => {
        const db = obtenerDatos();
        db.notas = db.notas.filter(n => n.id !== idNota);
        guardarDatos(db);
        renderizarNotas(db.notas);
      }
    });
  }
});

function crearNotaCard(nota) {
  const div = document.createElement("div");
  div.className = "bg-white rounded-lg shadow p-4 transition hover:shadow-lg";

  let historial = "";
  if (nota.historialEdiciones?.length) {
    historial = `
      <details class="mt-2 text-xs text-gray-600">
        <summary class="cursor-pointer text-blue-700 font-medium">📝 Ver historial de ediciones</summary>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          ${nota.historialEdiciones.map(
      ed => `<li>${ed.editadaPor} — ${new Date(ed.fechaEdicion).toLocaleString()}</li>`
    ).join("")}
        </ul>
      </details>
    `;
  }

  div.innerHTML = `
    <p class="text-gray-700 mb-3 whitespace-pre-wrap">${nota.contenido}</p>
    <div class="text-xs text-gray-500 mb-2">
      ✍️ <strong>${nota.creadaPor}</strong><br />
      📅 Creada: ${new Date(nota.fechaCreacion).toLocaleString()}
    </div>
    ${historial}
    <div class="flex justify-between items-center mt-4">
      <a href="./editarNota.html?id=${nota.id}" class="text-sm text-blue-600 hover:underline">✏️ Editar</a>
      <button data-id="${nota.id}" class="text-sm text-red-600 hover:underline eliminar-btn">🗑️ Eliminar</button>
    </div>
  `;

  return div;
}

formFiltros.addEventListener("submit", (e) => {
  e.preventDefault();

  const autor = document.getElementById("filtroUsuario").value.trim().toLowerCase();
  const desdeCreacion = document.getElementById("filtroFechaCreacion").value;
  const desdeEdicion = document.getElementById("filtroFechaEdicion").value;

  const filtradas = notas.filter(nota => {
    const coincideAutor = autor ? nota.creadaPor.toLowerCase().includes(autor) : true;
    const coincideCreacion = desdeCreacion ? new Date(nota.fechaCreacion) >= new Date(desdeCreacion) : true;
    const coincideEdicion = desdeEdicion
      ? nota.fechaEdicion && new Date(nota.fechaEdicion) >= new Date(desdeEdicion)
      : true;

    return coincideAutor && coincideCreacion && coincideEdicion;
  });

  renderizarNotas(filtradas);
});

const btnCerrarSesion = document.getElementById("btnCerrarSesion");
btnCerrarSesion?.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.href = "./login.html";
});

renderizarNotas(notas);
