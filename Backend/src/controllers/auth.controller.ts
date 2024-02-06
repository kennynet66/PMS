import { Request, Response } from "express";
import { userInterface } from "../interface/signup.interface";
import { v4 } from "uuid";


export const createUser = async (req: Request, res: Response) => {
    try {
        const id = v4;
        const { email, password, user_name }: userInterface = req.body;

        return res.json({
            user: req.body
        })
    } catch (error) {
        return res.json({ error })
    }
}