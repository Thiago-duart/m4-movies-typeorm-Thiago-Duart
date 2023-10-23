import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    const PORT: number = parseInt(process.env.PORT!) || 3000;
    app.listen(PORT, async (): Promise<void> => {
      console.log("app running on port ", PORT);
    });
  })
  .catch((err) => console.error(err));
