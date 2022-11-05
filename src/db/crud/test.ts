import { Logger } from "../../logger/api.logger";
import { datasource } from "../data-source";
import { TestModel } from "../entity/TestModel";

export class TestModelRepository {
    private db: any = datasource.manager;

    constructor(){
    }

    async insert(){
        const item = new TestModel();
        await this.db.save(item)
        Logger.info({"msg": "Saved", "item": item});
        return item;
    }
}