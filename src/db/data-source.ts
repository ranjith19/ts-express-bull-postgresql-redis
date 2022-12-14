import "reflect-metadata"
import { DataSource } from "typeorm"
import { TestModel } from "./entity/TestModel";
import { test1667821292374 } from "./migration/1667821292374-test";

const hostName = process.env.DBHOST;
const userName = process.env.DBUSER;
const password = process.env.DBPASSWORD;
const database = process.env.DBNAME;
const port = process.env.DBPORT;

export const datasource = new DataSource({
    type: "postgres",
    host:hostName,
    port: parseInt(port),
    username: userName,
    password: password,
    database: database,
    synchronize: false,
    logging: false,
    entities: [TestModel],
    migrations: [test1667821292374],
    subscribers: [],
})
