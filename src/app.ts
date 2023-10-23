import "express-async-errors";
import "dotenv/config";
import "reflect-metadata";
import express, { Application } from "express";
import { handleErrors } from "./middlewares/handleErros.middleware";
import { moviesRoutes } from "./routes/movies_routes";

const app: Application = express();

app.use(express.json());

app.use("/movies", moviesRoutes);

app.use(handleErrors);

export default app;
