import { Logger } from "pino";
import { DefaultQueue } from "./queues";
import { TaskData } from "./taskData";




export const sendAsyncTask =  async (log: Logger, taskData: TaskData) => {
    taskData.sentAt = new Date();
    log.info({msg:"Sending task", taskData});
    const job = await DefaultQueue.add(taskData);
    log.info({msg: "Job sent", job})
    return job;
}