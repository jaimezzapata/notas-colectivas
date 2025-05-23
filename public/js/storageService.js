const STORAGE_KEY = "notas_colectivas_db";
const estructuraInicial = {
  usuarios: [],
  notas: []
};
export function inicializarStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estructuraInicial));
  }
}
export function obtenerDatos() {
  const datos = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(datos);
}

export function guardarDatos(nuevosDatos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosDatos));
}
