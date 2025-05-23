export function alertaInfo(titulo = "Información", mensaje = "") {
  Swal.fire({
    icon: "info",
    title: titulo,
    text: mensaje,
    confirmButtonColor: "#2563eb"
  });
}
export function alertaExito(titulo = "Éxito", mensaje = "") {
  Swal.fire({
    icon: "success",
    title: titulo,
    text: mensaje,
    confirmButtonColor: "#16a34a"
  });
}
export function alertaError(titulo = "Error", mensaje = "") {
  Swal.fire({
    icon: "error",
    title: titulo,
    text: mensaje,
    confirmButtonColor: "#dc2626"
  });
}
export function confirmarAccion({ 
  titulo = "¿Estás seguro?",
  texto = "Esta acción no se puede deshacer.",
  confirmarTexto = "Sí, continuar",
  cancelarTexto = "Cancelar",
  onConfirm = () => {}
}) {
  Swal.fire({
    title: titulo,
    text: texto,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#e11d48",
    cancelButtonColor: "#6b7280",
    confirmButtonText: confirmarTexto,
    cancelButtonText: cancelarTexto
  }).then((result) => {
    if (result.isConfirmed) onConfirm();
  });
}


