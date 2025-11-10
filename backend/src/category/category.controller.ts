import express from "express";
import {
  createCategoryServices,
  deleteCategoryServices,
  getAllCategoryServices,
  getCategoryByIdServices,
  updateCategoryServices,
} from "./category.services";

const router = express.Router();

// Function to get all category
router.get("/", async (req, res) => {
  try {
    const responseDatas = await getAllCategoryServices();
    res.json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to get a specific category by ID
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const responseDatas = await getCategoryByIdServices(id);
    res.json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to create a new category
router.post("/", async (req, res) => {
  try {
    const responseDatas = await createCategoryServices(req.body);
    res.json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to update a category by ID
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const responseDatas = await updateCategoryServices(id, req.body);
    res.json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to delete a category by ID
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteCategoryServices(id);
    res.status(200).json({ message: "Data berhasil dihapus!" }); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

export default router;
