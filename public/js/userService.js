import { inicializarStorage, obtenerDatos, guardarDatos } from "./storageService.js";

// Asegura que haya una base inicial
inicializarStorage();

export function registrarUsuario({ nombre, correo, contraseña }) {
  const db = obtenerDatos();
  const existe = db.usuarios.find(u => u.correo === correo);
  if (existe) return false;

  const nuevoUsuario = {
    id: Date.now(),
    nombre,
    correo,
    contraseña, // En producción real: se debe hashear
    registradoEn: new Date().toISOString()
  };

  db.usuarios.push(nuevoUsuario);
  guardarDatos(db);
  return true;
}

export function verificarCredenciales(correo, contraseña) {
  const db = obtenerDatos();
  return db.usuarios.find(u => u.correo === correo && u.contraseña === contraseña) || null;
}

export function protegerRuta() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (!usuario) {
    window.location.href = "/error.html?code=403&title=Acceso denegado&msg=Debes iniciar sesión para continuar.";
  }
  return usuario;
}
