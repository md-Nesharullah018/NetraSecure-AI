import express from "express";
import scanController from "../controllers/scanController.js";

const router = express.Router();

router.post("/", scanController);

export default router;