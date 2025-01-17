import express from "express";

import {
  deleteProfile,
  getProfile,
  updateProfile,
} from "@/controllers/user_controller";
import { authMiddleware } from "@/middlewares/auth_middleware";

const router = express.Router();

router.get("/me", authMiddleware, getProfile);
router.delete("/me", authMiddleware, deleteProfile);
router.put("/me", authMiddleware, updateProfile);

export default router;
