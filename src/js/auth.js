import { registrarUsuario, verificarCredenciales } from "./userService.js";

document.getElementById("registroForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;
  const contraseña = e.target.contraseña.value;
  const exito = registrarUsuario({ nombre, correo, contraseña });
  if (exito) {
    window.location.href = "login.html";
  } else {
    alert("Este correo ya está registrado.");
  }
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const correo = e.target.correo.value;
  const contraseña = e.target.contraseña.value;

  const usuario = verificarCredenciales(correo, contraseña);
  if (usuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.href = "tablero.html";
  } else {
    alert("Correo o contraseña incorrectos.");
  }
});
