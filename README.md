# Proyecto Fullstack con Express y React

Este es un proyecto fullstack desarrollado con **Express** y **TypeScript** en el backend y **React**, **TypeScript** y **Tailwind CSS** en el frontend.

## Tecnologías utilizadas

### Backend:

- **Node.js**
- **Express**
- **TypeScript**
- **Cors** (comunicacion de origenes cruzados)
- **Dotenv** (para variables de entorno)
- **Express-validator** (para la validación de datos en las solicitudes HTTP)

### Frontend:

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Axios** (Manejo eficiente de peticiones HTTP al backend)
- **React-Hook-Form** (Gestión optimizada de formularios con menos re-renderizados)
- **React-Toastify** (Notificaciones y alertas visuales)
- **Zod** (Validación de datos en el frontend)
- **HeadlessUi** (Componentes accesibles y completamente personalizables)

## Estructura del proyecto

### Backend (Express + TypeScript)

El backend sigue la **arquitectura MVC (Modelo-Vista-Controlador)** para mantener un código organizado y modular:

```
backend/
│── src/
│   ├── config/        # Configuración global
│   │   ├── process.ts   # Maneja configuraciones generales del backend
│   ├── controllers/   # Lógica de controladores
│   │   ├── TaskController.ts  # Controlador de tareas
│   ├── data/          # Datos JSON de prueba
│   │   ├── data.json  # Datos de prueba para tareas
│   ├── middleware/    # Middlewares personalizados
│   │   ├── index.ts   # Configuración de middlewares globales
│   ├── routes/        # Definición de rutas
│   │   ├── TaskRoute.ts   # Rutas relacionadas con tareas
│   ├── index.ts       # Archivo de exportación de rutas
│   ├── server.ts      # Punto de entrada del servidor
│── .env               # Variables de entorno
│── package.json       # Dependencias del proyecto
│── tsconfig.json      # Configuración de TypeScript
```

### Frontend (React + TypeScript + Tailwind CSS)

El frontend está organizado por **tipos de archivos** para mejorar la escalabilidad y mantenimiento del código:

```
frontend/
│── src/
│   ├── components/    # Componentes reutilizables
│   │   ├── ErrorMessage.tsx  # Componente de mensaje de error
│   │   ├── TaskDetail.tsx    # Vista de detalle de una tarea
│   │   ├── TaskForm.tsx      # Formulario para crear o editar tareas
│   │   ├── TaskList.tsx      # Lista de tareas
│   ├── data/          # Datos estáticos
│   │   ├── index.ts   # Archivo con datos iniciales en select del form
│   ├── hooks/         # Hooks personalizados
│   │   ├── useTask.ts # Hook para manejar las tareas
│   ├── schemas/       # Esquemas de validación
│   │   ├── TaskSchema.ts # Validación de tareas con Zod
│   ├── services/      # Funciones para interactuar con el backend
│   │   ├── TaskServices.ts # Servicio para consumir API de tareas
│   ├── types/         # Tipos de datos y definiciones
│   │   ├── index.ts   # Definición de tipos de datos para tareas basandonos en los schemas
│   ├── App.tsx        # Componente principal
│   ├── main.tsx       # Punto de entrada de la aplicación
│   ├── vite-env.d.ts  # Configuración de Vite
│── .env.local         # Variables de entorno
│── .gitignore         # Ignorar algunos archivos en Github
│── eslint.config.js   # Configuraciones de eslint
│── index.html         # Pagina de Principal
│── package.json       # Dependencias del proyecto
│── tsconfig.app.json  # Configuración de Typescript
│── tsconfig.json      # Configuración de Typescript
│── tsconfig.node.json # Configuración de Typescript
│── vite.config.ts     # Configuración de Vite

```

## Instalación y ejecución

Sigue estos pasos para instalar y ejecutar el proyecto en local.

### 1. Clonar el repositorio

```sh
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

### 2. Configurar el backend

```sh
cd backend
npm install   # Instalar dependencias
cp .envexample .env  # Configurar variables de entorno
npm run dev  # Iniciar servidor en modo desarrollo
```

### 3. Configurar el frontend

```sh
cd frontend
npm install  # Instalar dependencias
cp .env.localexample .env.local  # Configurar variables de entorno
npm run dev  # Iniciar la aplicación
```

### 4. Acceder a la aplicación

Una vez ejecutados los servidores, accede a la aplicación desde:

- **Backend:** `http://localhost:5000`
- **Frontend:** `http://localhost:5173`

## Notas adicionales

- **El backend utiliza MVC** para una mejor organización del código.
- **El frontend está modularizado por tipos de archivos** para facilitar la escalabilidad.
