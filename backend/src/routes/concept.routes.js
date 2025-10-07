import express from "express";
import { createConceptHandler, deleteConceptHandler, getAllConceptsHandler, getConceptByIdHandler, updateConceptHandler } from "../controllers/concept.controller.js";

const router = express.Router();

// Ruta para crear un nuevo concepto
router.post('/', createConceptHandler);

// Ruta para obtener todos los conceptos
router.get('/', getAllConceptsHandler);

// Ruta para obtener un concepto por su ID
router.get('/:id', getConceptByIdHandler);

// Ruta para actualizar un concepto por su ID
router.put('/:id', updateConceptHandler);

// Ruta para eliminar un concepto por su ID
router.delete('/:id', deleteConceptHandler);

export default router;