import { TestModelRepository } from "../db/crud/test";
import * as express from "express";
import { sendJsonResponse } from "./utils";


export class TestRoute {

    private repo: TestModelRepository;

    constructor() {
        this.repo = new TestModelRepository();
    }

    async create() {
        return await this.repo.insert();
    }

}

export const setupTestRoutes = (app: express.Application) => {
    const route = new TestRoute();

    app.get("/api/test/", (req, res) => {
        route.create().then(item => {
            sendJsonResponse(res, item);
        })
    })
}