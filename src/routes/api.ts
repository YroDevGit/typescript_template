import express,{Request, Response, NextFunction} from "express";
const router = express.Router();
import {addStaff} from "../controllers/StaffController";

router.post("/addStaff", addStaff);

export default router;