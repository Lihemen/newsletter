import { createServer } from "http";
import * as dotenv from "dotenv";
dotenv.config();
import { app } from "./app";

const port = process.env.PORT || 4200;

const server = createServer(app);

server.listen(port, () => {
  console.log("Server is listening on port " + port);
});

