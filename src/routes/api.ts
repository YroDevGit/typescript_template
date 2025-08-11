import express,{Request, Response, NextFunction} from "express";
const router = express.Router();
import {addStaff} from "../controllers/sample";

router.post("/addStaff", addStaff);

export default router;