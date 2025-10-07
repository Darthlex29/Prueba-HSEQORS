import { createConcept, getAllConcepts } from "../services/concept.service.js";

const defaultConcepts = [
  {
    name: "Lean Startup",
    definition: "A method for developing businesses and products that aims to shorten product development cycles and rapidly discover if a proposed business model is viable.",
    book_section: "THE ROOTS OF THE LEAN STARTUP",
  },
  {
    name: "Validated Learning",
    definition: "A unit of progress to rigorously demonstrate that a team has discovered valuable truths about a startup's present and future business prospects.",
    book_section: "THE ROOTS OF THE LEAN STARTUP",
  },
  {
    name: "Build-Measure-Learn Feedback Loop",
    definition: "A core component of the Lean Startup methodology where ideas are turned into products, customer reactions are measured, and then a decision is made whether to persevere or pivot.",
    book_section: "VISION",
  },
  {
    name: "Engine of Growth",
    definition: "The mechanism that startups use to achieve sustainable growth, which can be sticky, viral, or paid.",
    book_section: "THE ROOTS OF THE LEAN STARTUP",
  },
  {
    name: "Pivot",
    definition: "A structured course correction designed to test a new fundamental hypothesis about the product, strategy, and engine of growth.",
    book_section: "VISION",
  },
];


export async function createDefaultConcepts() {
  try {
    const existingConcepts = await getAllConcepts();
    if (existingConcepts.length >= 5) {
      console.log("✅ The database already contains the necessary concepts. No seeding is required.");
      return;
    }

    for (const conceptData of defaultConcepts) {
      const conceptExists = existingConcepts.some(c => c.name === conceptData.name);
      if (!conceptExists) {
        await createConcept(conceptData);
      }
    }

    console.log("✅ Seeding complete.");
  } catch (error) {
    console.error("❌ Error during the seeding process:", error);
  }
}
