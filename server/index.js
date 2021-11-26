import Fastify from "fastify";
import dotenv from "dotenv";
import { setupApiRoutes } from "./routes/index.js";

dotenv.config();
const PORT = process.env.PORT || 8080;

const fastify = Fastify();

const start = async () => {
  try {
    setupApiRoutes(fastify);
    fastify.listen(PORT, () => {
      console.log("LISTENING ON PORT: " + PORT);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();
