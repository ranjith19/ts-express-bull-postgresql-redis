import { Logger } from "pino";
import { datasource } from "../data-source";
import { TestModel } from "../entity/TestModel";

export class TestModelRepository {
    private db: any = datasource.manager;

    constructor(){
    }

    async insert(log: Logger){
        const item = new TestModel();
        await this.db.save(item)
        log.info({"msg": "Saved", "item": item});
        return item;
    }
}