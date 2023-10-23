import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createMovieSchema, updateMovieSchema } from "../schemas/movies.schema";
import { MoviesControler } from "../controller/movies.controller";
import {
  movieExistsById,
  movieExistsByName,
} from "../middlewares/movieExists.midleware";
import { pagination } from "../middlewares/pagination.middleware";

export const moviesRoutes: Router = Router();

const movies = new MoviesControler();

moviesRoutes.post(
  "/",
  validateBody(createMovieSchema),
  movieExistsByName,
  movies.createMovie
);
moviesRoutes.get("/", pagination, movies.findMovie);
moviesRoutes.patch(
  "/:id",
  validateBody(updateMovieSchema),
  movieExistsByName,
  movieExistsById,
  movies.updateMovie
);
moviesRoutes.delete("/:id", movieExistsById, movies.deleteMovie);
