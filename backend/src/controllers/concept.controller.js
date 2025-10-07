import {
  createConcept,
  getAllConcepts,
  getConceptById,
  updateConcept,
  deleteConcept,
} from "../services/concept.service.js";

export async function createConceptHandler(req, res, next) {
  try {
    console.log("Created concept:", req.body);
    const concept = await createConcept(req.body);

    res.status(201).json(concept);
  } catch (error) {
    next(error);
  }
}

export async function getAllConceptsHandler(req, res) {
  try {
    const concepts = await getAllConcepts();
    res.status(200).json(concepts);
  } catch (error) {
    console.error("Error fetching concepts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getConceptByIdHandler(req, res, next) {
  try {
    const concept = await getConceptById(req.params.id);
    res.status(200).json(concept);
  } catch (error) {
    next(error);
  }
}

export async function updateConceptHandler(req, res, next) {
  try {
    const concept = await updateConcept(req.params.id, req.body);
    res.status(200).json(concept);
  } catch (error) {
    next(error);
  }
}

export async function deleteConceptHandler(req, res, next) {
  try {
    await deleteConcept(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
