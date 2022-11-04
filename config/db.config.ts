import { Sequelize } from 'sequelize-typescript'
import { Tasks } from '../model/task.model';

export const connect = () => {

    const hostName = process.env.DBHOST;
    const userName = process.env.DBUSER;
    const password = process.env.DBPASSWORD;
    const database = process.env.DBNAME;
    const port = process.env.DBPORT;
    const dialect: any = process.env.DBDIALECT;

    console.log("connecting to", database, "at", hostName, "using dialect", dialect);

    const sqlOptions = {
        host: hostName,
        dialect,
        repositoryMode: true,
        port: parseInt(port),
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        },
        reconnect: true
    }
    const sequelize = new Sequelize(database, userName, password, sqlOptions);

    sequelize.addModels([Tasks]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    return db;

}