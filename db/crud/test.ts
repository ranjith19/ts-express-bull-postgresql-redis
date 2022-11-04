import { APILogger } from "../../logger/api.logger";
import { datasource } from "../data-source";
import { TestModel } from "../entity/TestModel";

export class TestModelRepository {
    
    private logger: APILogger;
    private db: any = datasource.manager;

    constructor(){
        
    }

    async insert(){
        const item = new TestModel();
        await this.db.save(item)
        this.logger.info("Saved", item);
        return item;
    }
}