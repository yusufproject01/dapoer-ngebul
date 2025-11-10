import express from "express";
import {
  createOrderServices,
  // deleteOrderServices,
  getAllOrderServices,
  getOrderByIdServices,
  updateOrderServices,
} from "./order.services";

const router = express.Router();

// Function to get all order
router.get("/", async (req, res) => {
  try {
    const responseDatas = await getAllOrderServices();
    res.status(200).json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to get a specific order by ID
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const responseDatas = await getOrderByIdServices(id);
    res.status(200).json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to create a new order
router.post("/", async (req, res) => {
  try {
    const responseDatas = await createOrderServices(req.body);
    res.status(200).json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to update a order by ID
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const responseDatas = await updateOrderServices(id, req.body);
    res.status(200).json(responseDatas); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to delete a order by ID
// router.delete("/:id", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     await deleteOrderServices(id);
//     res.status(200).json({ message: "Data berhasil dihapus!" }); // Ini yang mengirim data ke client
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Terjadi kesalahan pada server" });
//   }
// });

export default router;
