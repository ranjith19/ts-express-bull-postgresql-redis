import { DefaultQueue } from "./async/queues";
import { Logger } from "./logger/api.logger";


DefaultQueue.process(async (job)=>{
    Logger.info({msg: "Received job", job: job});
})

Logger.info({msg: "Queue inited", queue: DefaultQueue.name, ts: new Date()});