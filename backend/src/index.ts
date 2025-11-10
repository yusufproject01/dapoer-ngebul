import express from "express";
import cors from "cors";
import userRouter from "./users/user.controller";
import authRouter from "./auth/auth.controller";
import categoryRouter from "./category/category.controller";
import menuRouter from "./menu/menu.controller";
import orderRouter from "./order/order.controller";
import { authenticateToken } from "./auth/auth.middleware";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Server Express dengan TypeScript berjalan 🚀");
});

// // error handling global
// app.use((err: any, req: any, res: any, next: any) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Terjadi kesalahan pada server" });
// });

//
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/menu", menuRouter);
app.use("/order", orderRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
