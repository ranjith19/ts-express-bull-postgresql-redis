import { TestModelRepository } from "../db/crud/test";
import * as express from "express";
import { sendJsonResponse } from "./utils";
import { sendAsyncTask } from "../async/send";
import { TaskData } from "../async/taskData";


export class TestRoute {

    private repo: TestModelRepository;

    constructor() {
        this.repo = new TestModelRepository();
    }

    async create() {
        return await this.repo.insert();
    }

    async asyncTest() {
        return await sendAsyncTask(new TaskData("Hello", ['hi']))
    }

}

export const setupTestRoutes = (app: express.Application) => {
    const route = new TestRoute();

    app.get("/api/test/", (req, res) => {
        route.create().then(item => {
            sendJsonResponse(res, item);
        })
    })

    app.get("/api/async/", (req, res) => {
        route.asyncTest().then(job => {
            sendJsonResponse(res, job);
        })
    })
}