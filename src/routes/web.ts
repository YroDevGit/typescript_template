import express, { Request, Response } from "express";
import {apiKeyMiddleware}  from "../middleware/apikey";
const router = express.Router();


router.post("/hello", async(req:Request, res:Response):Promise<any>=>{
    res.json({
        code:200,
        message:"Hello world"
    });
});

export default router;
