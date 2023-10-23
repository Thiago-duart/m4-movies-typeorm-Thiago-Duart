import { z } from "zod";

export const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(5).max(50),
  description: z.string().nullable().optional(),
  price: z.number().positive().int(),
  duration: z.number().positive(),
});

export const createMovieSchema = movieSchema.omit({ id: true });
export const updateMovieSchema = movieSchema.omit({ id: true }).partial();
