import { DefaultQueue } from "./async/queues";
import { APILogger } from "./logger/api.logger";

const logger = new APILogger()

DefaultQueue.process(async (job)=>{
    logger.info("received", job.data);
})

console.log("Queue", DefaultQueue.name, "initialised");