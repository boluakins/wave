import express from "express";
import middleware from "./middleware";
import routes from "./routes";
import { port } from "./config";
import ErrorHandler from './middleware/errorHandler';

const app = express();

app.use(middleware);
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server listening on ${port}...`);
});
