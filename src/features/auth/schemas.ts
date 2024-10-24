import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "required"),
  email: z.string().email(),
  password: z.string().min(8, "Min 8 character"),
});
