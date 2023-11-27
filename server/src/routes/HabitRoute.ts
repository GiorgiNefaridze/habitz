import { Router } from "express";

import {
  GetHabitsController,
  CreateHabitController,
  DeleteHabitController,
} from "../controllers/HabitController";

const router: Router = Router();

router.get("/", GetHabitsController);

router.post("/", CreateHabitController);

router.delete("/", DeleteHabitController);

export default router;
