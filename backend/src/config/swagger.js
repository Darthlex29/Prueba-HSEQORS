// src/config/swagger.js

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de Concepts",
    version: "1.0.0",
    description: "API de conceptos basados en Lean Startup",
  },
  servers: [
    {
      url: "http://localhost:3000",  // ajusta si usas otro puerto
    },
  ],
};

const options = {
  definition: swaggerDefinition,
  apis: ["./routes/*.js", "../routes/**/*.js"],  // ajusta la ruta relativa para tus archivos de rutas
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger;
