import { registrarUsuario, verificarCredenciales } from "./userService.js";
import { alertaExito, alertaError } from "./utils.js";

document.getElementById("registroForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;
  const contraseña = e.target.contraseña.value;

  const exito = registrarUsuario({ nombre, correo, contraseña });
  if (exito) {
    alertaExito("Registro exitoso", "Bienvenido/a a Notas Colectivas.");
    setTimeout(() => {
      window.location.href = "/login.html";
    }, 1500);
  } else {
    alertaError("Correo duplicado", "Este correo ya está registrado.");
  }
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const correo = e.target.correo.value;
  const contraseña = e.target.contraseña.value;

  const usuario = verificarCredenciales(correo, contraseña);
  if (usuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    alertaExito("Bienvenido/a", `Hola ${usuario.nombre}`);
    setTimeout(() => {
      window.location.href = "/tablero.html";
    }, 1500);
  } else {
    alertaError("Acceso denegado", "Correo o contraseña incorrectos.");
  }
});
