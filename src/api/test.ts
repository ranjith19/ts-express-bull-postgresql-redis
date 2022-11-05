import { TestModelRepository } from "../db/crud/test";
import * as express from "express";
import { sendJsonResponse } from "./utils";
import { sendAsyncTask } from "../async/send";
import { TaskData } from "../async/taskData";
import { Logger } from "pino";


class TestRoute {

    private repo: TestModelRepository;

    constructor() {
        this.repo = new TestModelRepository();
    }

    async create() {
        return await this.repo.insert();
    }

    async asyncTest(logger: Logger) {
        console.log("logger is", logger)
        return await sendAsyncTask(new TaskData("Hello", ['hi']))
    }

}

const route = new TestRoute();

export const testRouter = express.Router();

testRouter.get("/api/test/", (req, res) => {
    route.create().then(item => {
        sendJsonResponse(res, item);
    })
})

testRouter.get("/api/async/", (req, res) => {
    req.log.info({ msg: "Starting async" });
    route.asyncTest(req.log).then(job => {
        sendJsonResponse(res, job);
    })
})
