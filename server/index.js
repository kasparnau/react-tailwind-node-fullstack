import express from "express";
import dotenv from "dotenv";

import { setupApiRoutes } from "./routes/index.js";

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const start = async () => {
  try {
    setupApiRoutes(app);
    app.listen(PORT, () => {
      console.log("LISTENING: " + PORT);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();
