import express from "express";
import {
  deleteUserServices,
  getAllUsersServices,
  getUserByIdServices,
  updateUserServices,
} from "./user.services";

const router = express.Router();

// Function to get all users
router.get("/", async (req, res) => {
  try {
    const user = await getAllUsersServices();
    res.json(user); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to get a specific user by ID
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await getUserByIdServices(id);
    res.json(user); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// // Function to create a new user
// router.post("/", async (req, res) => {
//   try {
//     const user = await createUserServices(req.body);
//     res.json(user); // Ini yang mengirim data ke client
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Terjadi kesalahan pada server" });
//   }
// });

// Function to update a user by ID
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await updateUserServices(id, req.body);
    res.json(user); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

// Function to delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteUserServices(id);
    res.status(200).json({ message: "Data berhasil dihapus!" }); // Ini yang mengirim data ke client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

export default router;
