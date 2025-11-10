import express from "express";
import {
  createMenuServices,
  deleteMenuServices,
  getAllMenuServices,
  getMenuByIdServices,
  updateMenuServices,
} from "./menu.services";

const router = express.Router();

// Function to get all menu
router.get("/", async (req, res) => {
  try {
    const responseDatas = await getAllMenuServices();
    res.status(200).json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to get a specific menu by ID
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const responseDatas = await getMenuByIdServices(id);
    res.status(200).json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to create a new menu
router.post("/", async (req, res) => {
  try {
    const responseDatas = await createMenuServices(req.body);
    res.status(200).json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to update a menu by ID
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const responseDatas = await updateMenuServices(id, req.body);
    res.status(200).json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to delete a menu by ID
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteMenuServices(id);
    res.status(200).json({ message: "Data berhasil dihapus!" }); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

export default router;
