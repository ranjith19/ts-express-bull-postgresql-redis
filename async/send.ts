import { DefaultQueue } from "./queues";
import { TaskData } from "./taskData";
import { Logger } from "../logger/api.logger"; 




export const sendAsyncTask =  async (taskData: TaskData) => {
    taskData.sentAt = new Date();
    Logger.info({msg:"Sending task", taskData});
    const job = await DefaultQueue.add(taskData);
    Logger.info({msg: "Job sent", job})
    return job;
}