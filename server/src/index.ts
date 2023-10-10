import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();

app.use(json());
app.use(cors());

const port = process.env.PORT ?? 3000;

app.listen(port, () => console.log("Server is running on port " + port));
