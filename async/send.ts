import { DefaultQueue } from "./queues";
import { TaskData } from "./taskData";

import { APILogger } from "../logger/api.logger";

const logger = new APILogger();


export const sendAsyncTask =  async (taskData: TaskData) => {
    taskData.sentAt = new Date();
    console.log("Sending task", taskData);
    const job = await DefaultQueue.add(taskData);
    return job;
}