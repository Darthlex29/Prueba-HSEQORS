import express from "express";
import { createConceptHandler, deleteConceptHandler, getAllConceptsHandler, getConceptByIdHandler, updateConceptHandler } from "../controllers/concept.controller.js";

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Concept:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del concepto
 *           example: 1
 *         name:
 *           type: string
 *           description: Nombre del concepto
 *           example: "Lean Startup"
 *         definition:
 *           type: string
 *           description: Definición del concepto
 *           example: "Método para construir empresas usando experimentos"
 *         book_section:
 *           type: string
 *           description: Sección del libro de donde proviene el concepto
 *           example: "Capítulo 1"
 *       required:
 *         - name
 *         - definition
 *         - book_section
 *     ConceptInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Validated Learning"
 *         definition:
 *           type: string
 *           example: "Proceso de aprender mediante experimentos"
 *         book_section:
 *           type: string
 *           example: "Capítulo 1"
 *       required:
 *         - name
 *         - definition
 *         - book_section
 */

/**
 * @openapi
 * /concepts:
 *   post:
 *     summary: Crear un nuevo concepto
 *     tags:
 *       - Concepts
 *     requestBody:
 *       description: Datos para crear un concepto
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConceptInput'
 *     responses:
 *       '201':
 *         description: Concepto creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Concept'
 *       '400':
 *         description: Campos faltantes o inválidos
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/', createConceptHandler);

/**
 * @openapi
 * /concepts:
 *   get:
 *     summary: Obtener todos los conceptos
 *     tags:
 *       - Concepts
 *     responses:
 *       '200':
 *         description: Lista de conceptos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Concept'
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/', getAllConceptsHandler);

/**
 * @openapi
 * /concepts/{id}:
 *   get:
 *     summary: Obtener un concepto por su ID
 *     tags:
 *       - Concepts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del concepto a obtener
 *     responses:
 *       '200':
 *         description: Concepto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Concept'
 *       '404':
 *         description: No se encontró el concepto
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/:id', getConceptByIdHandler);

/**
 * @openapi
 * /concepts/{id}:
 *   put:
 *     summary: Actualizar un concepto por su ID
 *     tags:
 *       - Concepts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del concepto a actualizar
 *     requestBody:
 *       description: Campos a actualizar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConceptInput'
 *     responses:
 *       '200':
 *         description: Concepto actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Concept'
 *       '404':
 *         description: No se encontró el concepto
 *       '400':
 *         description: Datos inválidos
 *       '500':
 *         description: Error interno del servidor
 */
router.put('/:id', updateConceptHandler);

/**
 * @openapi
 * /concepts/{id}:
 *   delete:
 *     summary: Eliminar un concepto por su ID
 *     tags:
 *       - Concepts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del concepto a eliminar
 *     responses:
 *       '204':
 *         description: Eliminado correctamente (sin contenido)
 *       '404':
 *         description: No se encontró el concepto
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/:id', deleteConceptHandler);

export default router;