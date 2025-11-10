import express from "express";
import { registerUserServices, loginUserServices } from "./auth.services";
import { authenticateToken } from "./auth.middleware";
import { getAllUsersServices } from "../users/user.services";
import { registerSchema } from "../validations/authValidation";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const parseResult = registerSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        error: "Validasi gagal",
        details: parseResult.error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }
    const { name, email, password } = parseResult.data;
    const user = await registerUserServices(name, email, password);
    res.status(201).json({ message: "Registrasi berhasil", user });
  } catch (error: any) {
    res
      .status(400)
      .json({ error: "Terjadi kesalahan : Format harus diisi semua" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await loginUserServices(email, password);
    res.status(200).json({
      message: "Login berhasil",
      token: data.token,
      user: data.user,
    });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
});

// Middleware proteksi endpoint
router.get("/", authenticateToken, async (req, res) => {
  const user = await getAllUsersServices();
  res.json(user);
});

export default router;
