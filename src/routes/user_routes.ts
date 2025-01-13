import express from "express";

import { deleteProfile, getProfile } from "@/controllers/user_controller";

const router = express.Router();

router.get("/me", getProfile);
router.delete("/me", deleteProfile);

export default router;
