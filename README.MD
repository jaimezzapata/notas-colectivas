# 📝 Notas Colectivas

Una aplicación web modular construida con **JavaScript (ES Modules)**, **HTML5** y **TailwindCSS**, que permite la creación, lectura, edición y eliminación de notas compartidas, almacenadas en el navegador mediante **LocalStorage**. Diseñada para promover el trabajo colaborativo, es ideal para grupos que desean compartir ideas rápidamente sin depender de un backend.

---

## 🎯 Propósito

Promover el trabajo colaborativo mediante una app de notas abierta y accesible desde cualquier navegador, sin necesidad de servidor, base de datos ni autenticación compleja.

---

## 🧭 Objetivo General

Construir una SPA moderna, modular y responsiva que permita:

- Registrar usuarios (solo nombre).
- Crear, editar y eliminar notas visibles para todos.
- Ver información de autoría y edición en cada nota.
- Persistir la información en el navegador usando LocalStorage.

---

## ⚙️ Funcionalidades

- ✅ Pantalla de ingreso con nombre de usuario.
- ✅ Panel de notas compartidas.
- ✅ Creación de notas con autor.
- ✅ Edición de notas con registro del editor.
- ✅ Eliminación de notas sin restricción.
- ✅ Persistencia de datos en LocalStorage.
- ✅ UI responsiva, accesible y clara con TailwindCSS.

---

## 🧰 Tecnologías utilizadas

- **HTML5** – marcado semántico.
- **TailwindCSS** – framework de diseño utilitario.
- **JavaScript (ES Modules)** – lógica modular de la aplicación.
- **LocalStorage API** – almacenamiento local sin backend.

---

## 🗃️ Modelo de datos (estructura LocalStorage)

```js
{
  usuarios: [
    {
      id: 1,
      nombre: "Laura",
      correo: "usuario@correo.com",
      contraseña: "contraseñ",
      registradoEn: "2025-05-23T10:00:00Z"
    }
  ],
  notas: [
    {
        id: 101,
        contenido: "Revisar cronograma de actividades",
        creadaPor: "Laura",
        fechaCreacion: "2025-05-23T10:15:00Z",
        historialEdiciones: [
            {
            editadaPor: "Carlos",
            fechaEdicion: "2025-05-24T11:00:00Z"
            },
            {
            editadaPor: "Ana",
            fechaEdicion: "2025-05-25T09:00:00Z"
            }
        ]
    }

  ]
}

```

## 📂 Encarpetado

```js
notas-colectivas/
│
├── index.html                 # Página inicial
├── /public/
│   ├── login.html             # Inicio de sesión
│   ├── registro.html          # Registro de usuario
│   ├── tablero.html           # Vista de todas las notas
│   ├── crearNota.html         # Crear nueva nota
│   ├── editarNota.html        # Editar nota existente
│   └── error.html             # Página de error dinámica
│
├── /src/
│   ├── /js/
│   │   ├── auth.js            # Registro e inicio de sesión
│   │   ├── tablero.js         # Lógica de render y filtros
│   │   ├── crearNota.js       # Crear nota nueva
│   │   ├── editarNota.js      # Editar nota por ID
│   │   ├── storageService.js  # Acceso a localStorage
│   │   ├── userService.js     # Validaciones, sesión, protección
│   │   └── utils.js           # Redirecciones de error
│   └── /css/
│       └── styles.css         # Estilos globales (opcional)

```

---
## ⚠ Consideraciones
Este proyecto fue creado con fines educativos. No incluye autenticación real ni control de acceso. Todos los datos son manipulables por cualquier usuario con acceso al navegador. Ideal para prácticas académicas y ejercicios de programación front-end con módulos.