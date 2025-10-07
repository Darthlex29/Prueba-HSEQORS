# Backend - Prueba-HSEQORS

Backend para el proyecto **Prueba-HSEQORS**, construido con Node.js y Express, utilizando Sequelize como ORM para la base de datos PostgreSQL. Incluye documentación de API generada con Swagger.

## Tabla de contenidos

- [Tecnologías principales](#tecnologías-principales)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Scripts disponibles](#scripts-disponibles)
- [Uso](#uso)
- [Documentación de la API](#documentación-de-la-api)
- [Contribución](#contribución)
- [Licencia](#licencia)

---

## Tecnologías principales

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io/) (documentación de API)
- [dotenv](https://github.com/motdotla/dotenv) (manejo de variables de entorno)
- [nodemon](https://nodemon.io/) (entorno de desarrollo)
- [Morgan](https://github.com/expressjs/morgan) (logging HTTP)

## Estructura del proyecto

```
backend/
├── src/
│   ├── index.js         # Punto de entrada del servidor
│   ├── ...              # Otros módulos, rutas, modelos, etc.
├── .env.example         # Ejemplo de variables de entorno
├── package.json
├── README.md
```

## Instalación

1. Clona el repositorio y navega al directorio `backend`:

   ```bash
   git clone https://github.com/Darthlex29/Prueba-HSEQORS.git
   cd Prueba-HSEQORS/backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Variables de entorno

Crea un archivo `.env` en la raíz de la carpeta `backend` siguiendo el ejemplo de `.env.example` (si existe). Variables comunes:

```
PORT=3000
DATABASE_URL=postgres://usuario:contraseña@host:puerto/base_de_datos
```

## Scripts disponibles

- `npm start`: Inicia el servidor en modo producción.
- `npm run dev`: Inicia el servidor en modo desarrollo con recarga automática (nodemon).
- `npm test`: Ejecuta los tests (actualmente no implementados).

## Uso

Para iniciar el backend en modo desarrollo:

```bash
npm run dev
```

Para iniciar en modo producción:

```bash
npm start
```

El servidor por defecto corre en [http://localhost:3000](http://localhost:3000) (puedes cambiar el puerto en `.env`).

## Documentación de la API

La documentación interactiva de la API está disponible mediante Swagger en:

```
http://localhost:3000/api-docs
```