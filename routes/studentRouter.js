import express from "express";
import { getStudent, createStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get("/student", getStudent);
router.post("/student", createStudent);

export default router;
