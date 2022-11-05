import { DefaultQueue } from "./src/async/queues";
import { Logger } from "./src/logger/api.logger";


DefaultQueue.process(async (job)=>{
    Logger.info({msg: "Received job", job: job});
})

Logger.info({msg: "Queue inited", queue: DefaultQueue.name, ts: new Date()});