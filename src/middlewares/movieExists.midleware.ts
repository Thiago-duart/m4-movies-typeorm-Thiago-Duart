import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import AppError from "../errors/AppError.error";

export const movieExistsByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repo = AppDataSource.getRepository(Movie);

  const movieName = req.body.name;

  const exists = await repo.findBy({ name: movieName });

  if (exists.length === 1) {
    throw new AppError("Movie already exists.", 409);
  }
  return next();
};
export const movieExistsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repo = AppDataSource.getRepository(Movie);

  const movieId = +req.params.id;

  const exists = await repo.findBy({ id: movieId });

  if (exists.length === 0) {
    throw new AppError("Movie not found", 404);
  }
  return next();
};
