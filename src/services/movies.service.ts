import { updateMovieSchema } from "./../schemas/movies.schema";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { PaginationType } from "../inteface/pagination";

export class MoviesService {
  async createMovie(data: Movie) {
    const repo = AppDataSource.getRepository(Movie);

    const newMovie = await repo.save(data);

    return newMovie;
  }

  async findMovie({
    nextPage,
    page,
    perPage,
    prevPage,
    order,
    sort,
  }: PaginationType) {
    const repo = AppDataSource.getRepository(Movie);
    const [movies, count] = await repo.findAndCount({
      skip: page,
      take: perPage,
      order: { [sort]: order },
    });
    return {
      prevPage: page <= 1 ? null : prevPage,
      nextPage,
      data: movies,
      count,
    };
  }
  async updateMovie(updateData: Movie, movieId: number) {
    const repo = AppDataSource.getRepository(Movie);

    await repo.update(movieId, updateData);

    const findMovie = await repo.findBy({ id: movieId });

    return findMovie;
  }
  async deleteMovie(movieId: number) {
    const repo = AppDataSource.getRepository(Movie);
    await repo.delete({ id: movieId });
  }
}
