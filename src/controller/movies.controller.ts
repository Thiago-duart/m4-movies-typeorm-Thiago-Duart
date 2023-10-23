import { Request, Response } from "express";
import { MoviesService } from "../services/movies.service";

const moviesService = new MoviesService();
export class MoviesControler {
  async createMovie(req: Request, res: Response) {
    try {
      const movies = await moviesService.createMovie(req.body);

      return res.status(201).json(movies);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "internal server error" });
    }
  }
  async findMovie(req: Request, res: Response) {
    try {
      // const movies = await moviesService.findMovie(req.query);
      const movies = await moviesService.findMovie(res.locals.pagination);
      return res.status(200).json(movies);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "internal server error" });
    }
  }
  async updateMovie(req: Request, res: Response) {
    try {
      const movieUpdate = await moviesService.updateMovie(
        req.body,
        +req.params.id
      );

      return res.status(200).json(movieUpdate[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "internal server error" });
    }
  }
  async deleteMovie(req: Request, res: Response) {
    try {
      const movieDelete = await moviesService.deleteMovie(+req.params.id);
      return res.status(204).json(movieDelete);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "internal server error" });
    }
  }
}
