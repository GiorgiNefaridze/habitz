import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";

import UserRoute from "./routes/UserRoute";

config();

const app = express();

app.use(json());
app.use(cors());

app.use("/api/user", UserRoute);

const port = process.env.PORT ?? 3000;

app.listen(port, () => console.log("Server is running on port " + port));
