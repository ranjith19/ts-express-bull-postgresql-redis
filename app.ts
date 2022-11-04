import * as bodyParser from "body-parser";
import * as express from "express";
import * as fs from 'fs';
import "reflect-metadata";
import * as swaggerUi from 'swagger-ui-express';
import { setupRoutes } from "./api/routes";
import { datasource } from "./db/data-source";
import { Logger } from "./logger/api.logger";


datasource.initialize()
    .then(() => {
        Logger.info("Data Source has been initialized!")
    })
    .catch((err) => {
        Logger.error({ msg: "Error during Data Source initialization:", err })
    })

class App {

    public express: express.Application;

    /* Swagger files start */
    private swaggerFile: any = (process.cwd() + "/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private customCss: any = fs.readFileSync((process.cwd() + "/swagger/swagger.css"), 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        setupRoutes(this.express);

        this.express.get("/", (req, res, next) => {
            res.setHeader('content-type', 'application/json');
            res.send(JSON.stringify({ detail: "Ok" }));
        });

        // swagger docs
        this.express.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.statusCode = 404;
            res.setHeader('content-type', 'application/json');
            res.send(JSON.stringify({ detail: "Invalid URL" }));
        });
    }
}

export default new App().express;