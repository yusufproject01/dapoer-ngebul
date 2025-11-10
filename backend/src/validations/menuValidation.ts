import { z } from "zod";

export const menuSchema = z.object({
  name: z.string().min(3),
  price: z.number().positive(),
  categoryId: z.number().int(),
  imageMenu: z.string().url("URL gambar tidak valid").optional(),
});
