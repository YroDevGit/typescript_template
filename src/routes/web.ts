import express, { Request, Response } from "express";
const router = express.Router();


router.post("/hello", async(req:Request, res:Response):Promise<any>=>{
    res.json({
        code:200,
        message:"Hello world"
    });
});

export default router;
