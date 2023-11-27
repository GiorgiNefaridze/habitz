import { Router } from "express";

import {
  LoginController,
  RegisterController,
  RetriveUserDataController,
} from "../controllers/UserController";

const router: Router = Router();

router.get("/", RetriveUserDataController);

router.post("/register", RegisterController);

router.post("/login", LoginController);

export default router;
