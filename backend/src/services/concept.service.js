import { Concept } from "../models/concept.js";
import { sequelize } from "../database/database.js";

// Funcion para crear un nuevo concepto
export async function createConcept({ name, definition, book_section }) {
  if (!name || !definition || !book_section) {
    const err = new Error(
      "Missing required fields: name, definition, book_section"
    );
    err.status = 400;
    throw err;
  }
  const concept = await Concept.create({
    name,
    definition,
    book_section,
  });
  return concept;
}

// Funcion para obtener todos los conceptos
export async function getAllConcepts() {
  return await Concept.findAll();
}

// Funcion para obtener un concepto por su ID
export async function getConceptById(id) {
  const note = await Concept.findByPk(id);
  if (!note) {
    const err = new Error("Concept not found");
    err.status = 404;
    throw err;
  }
  return note;
}

// Funcion para actualizar un concepto por su ID
export async function updateConcept(id, { name, definition, book_section }) {
  let t = await sequelize.transaction();
  try {
    const concept = await Concept.findByPk(id);
    // Si el concepto no existe, lanzar un error 404
    if (!concept) {
      await t.rollback();
      const err = new Error("Concept not found");
      err.status = 404;
      throw err;
    }
    // Actualizar los campos del concepto
    await concept.update(
      {
        name: name || concept.name,
        definition: definition || concept.definition,
        book_section: book_section || concept.book_section,
      },
      { transaction: t }
    );
    await t.commit();
    return concept;
  } catch (error) {
    // Si ocurre un error, hacer rollback de la transaccion
    try {
      await t.rollback();
    } catch (rollbackError) {
      console.error("Error rolling back transaction:", rollbackError);
    }
    throw error;
  }
}

export async function deleteConcept(id) {
  const concept = await Concept.findByPk(id);
  if (!concept) {
    const err = new Error("Concept not found");
    err.status = 404;
    throw err;
  }
  await concept.destroy();
  return;
}
