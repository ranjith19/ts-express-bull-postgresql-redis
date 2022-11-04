import { DefaultQueue } from "./queues";
import { TaskData } from "./taskData";

import { APILogger } from "../logger/api.logger";

const logger = new APILogger();


export const sendAsyncTask =  async (taskData: TaskData) => {
    taskData.sentAt = new Date();
    logger.info("Sending task", taskData);
    const job = await DefaultQueue.add(taskData);
    logger.info("Job sent", job)
    return job;
}