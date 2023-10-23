import { Movie } from "../entities";
import {
  createMovieSchema,
  movieSchema,
  updateMovieSchema,
} from "../schemas/movies.schema";
import { z } from "zod";

export type MoviesType = z.infer<typeof movieSchema>;
export type CreateMovieType = z.infer<typeof createMovieSchema>;
