import express, { Request, Response, NextFunction } from "express";
import Staff from "../models/Staff";
import { body, validationResult } from "express-validator";

export const addStaff = [
    body("fullname").notEmpty().withMessage("Fullname is required"),
    body("contact").notEmpty().withMessage("Contact is required").isLength({ min: 11, max: 11 }).withMessage("Contact should have 11 characters"),
    body("address").notEmpty().withMessage("Address is required")

    , async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({
                code: 401,
                message: "Validation Error",
                error: errors
            }); return;
        }

        const data: any = req.body;
        const result = await Staff.create(data);
        res.status(200).json({
            code: 200,
            message: "OK",
            error: errors,
            request: req.query,
            data: (await result).toJSON()
        });
    }]