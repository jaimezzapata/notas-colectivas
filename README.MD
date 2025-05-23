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
      registradoEn: "2025-05-23T10:00:00Z"
    }
  ],
  notas: [
    {
      id: 101,
      contenido: "Revisar cronograma de actividades",
      creadaPor: "Laura",
      editadaPor: null,
      fechaCreacion: "2025-05-23T10:15:00Z",
      fechaEdicion: null
    }
  ]
}

```

## 🗃️ Encarpetado

```js
notas-colectivas/
│
├── /public/
│   ├── index.html             # Página de inicio (login o entrada)
│   ├── tablero.html           # Página principal donde se ven las notas
│   └── error.html             # Página de error (opcional)
│
├── /src/
│   ├── /js/
│   │   ├── login.js           # Lógica para el formulario de ingreso
│   │   ├── tablero.js         # Lógica para mostrar y gestionar notas
│   │   ├── storageService.js  # Módulo para trabajar con LocalStorage
│   │   ├── userService.js     # Módulo para trabajar con usuarios
│   │   └── utils.js           # Funciones auxiliares (formato fecha, etc.)
│   └── /css/
│       └── styles.css         # Estilos de Tailwind
│
└── README.md

```
