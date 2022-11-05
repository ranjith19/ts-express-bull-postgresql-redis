import { DefaultQueue } from "./src/async/queues";
import { getLogger } from "./src/logger/api.logger";

const logger = getLogger("bull");

DefaultQueue.process(async (job)=>{
    logger.info({msg: "Received job", job: job});
})

logger.info({msg: "Queue inited", queue: DefaultQueue.name, ts: new Date()});