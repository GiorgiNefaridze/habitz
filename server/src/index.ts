import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";

import UserRoute from "./routes/UserRoute";
import HabitRoute from "./routes/HabitRoute";

config();

const app = express();

app.use(json());
app.use(cors());

app.use("/api/user", UserRoute);
app.use("/api/habit", HabitRoute);

const port = process.env.PORT ?? 3000;

app.listen(port, () => console.log("Server is running on port " + port));
