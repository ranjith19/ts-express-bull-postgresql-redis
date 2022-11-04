import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { migration1667562210734 } from "./migration/1667562210734-migration";

const hostName = process.env.DBHOST;
const userName = process.env.DBUSER;
const password = process.env.DBPASSWORD;
const database = process.env.DBNAME;
const port = process.env.DBPORT;

export const AppDataSource = new DataSource({
    type: "postgres",
    host:hostName,
    port: parseInt(port),
    username: userName,
    password: password,
    database: database,
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [migration1667562210734],
    subscribers: [],
})
