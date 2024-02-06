import express, { NextFunction, Request, Response, json } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(json());

app.use((error: Error, req: Request, res: Response, next:NextFunction) => {
    return res.json({
        error
    })
})

app.listen(process.env.PORT, ()=> {
    console.log("Server is listening on port", process.env.PORT);
    
})
