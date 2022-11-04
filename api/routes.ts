import * as express from "express";
import { testRouter } from "./test";

export const setupRoutes = (app: express.Application) => {
    app.use(testRouter)
}