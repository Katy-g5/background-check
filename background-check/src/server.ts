import envVars from "./constants/env-vars";
import express, { Express, Request, Response } from 'express';
import cors from "cors";
import morgan from "morgan";
import paths from "./routes/constants/paths";
import apiRouter from "./routes/api";
import HttpStatusCodes from "./constants/HttpStatusCodes";

export const createServer = () => {
    const app: Express = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());

    app.use(morgan("dev"));
    app.use(paths.basePath, apiRouter);

    // handle 404
    app.use((_req, res) => {
        res.status(404).json({ message: "Error 404 not found" });
    });

    // error handler
    app.use((err: Error, _: Request, res: Response) => {
        console.error(err, true);
        res.status(HttpStatusCodes.BAD_REQUEST).json({ error: err.message })
    });

    return app;
};
