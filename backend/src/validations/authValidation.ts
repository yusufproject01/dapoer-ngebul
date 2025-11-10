import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("Nama wajib diisi"),
  email: z
    .string()
    .nonempty("Email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .nonempty("Password wajib diisi")
    .min(6, "Password minimal 6 karakter"),
});
