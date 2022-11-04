import * as express from "express";
import { setupTestRoutes } from "./test";

export const setupRoutes = (app: express.Application) => {
    setupTestRoutes(app);
}