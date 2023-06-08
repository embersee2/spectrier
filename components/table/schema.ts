import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string(),
  category: z.string(),
  price: z.coerce.number().min(1),
  discount: z.coerce.number().min(0),
  stock: z.coerce.number().min(1),
  image: z.string(),
  // createdAt: z.date(),
  // updatedAt: z.date(),
});

export const productUpdateSchema = z.object({
  id: z.number(),
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string(),
  category: z.string(),
  price: z.coerce.number().min(1),
  discount: z.coerce.number().min(0),
  stock: z.coerce.number().min(1),
  image: z.string(),
});

export type ProductFormValues = z.infer<typeof productUpdateSchema>;
export type productForm = z.infer<typeof productSchema>;