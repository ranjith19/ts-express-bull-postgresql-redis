import * as bodyParser from "body-parser";
import * as express from "express";
import * as fs from 'fs';
import "reflect-metadata";
import * as swaggerUi from 'swagger-ui-express';
import { setupRoutes } from "./src/api/routes";
import { datasource } from "./src/db/data-source";
import { getLogger } from "./src/logger/api.logger";
import * as ExpressPino from "express-pino-logger";
import { Logger } from "pino";
import { requestID } from "./src/logger/requestId";

declare module 'express-serve-static-core' {
  interface Request {
    log?: Logger,
    requestId?: string
  }
}

const logger = getLogger("app-logger")

datasource.initialize()
    .then(() => {
        logger.info("Data Source has been initialized!")
    })
    .catch((err) => {
        logger.error({ msg: "Error during Data Source initialization:", err })
    })

class App {

    public express: express.Application;

    /* Swagger files start */
    private swaggerFile: any = (process.cwd() + "/src/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private customCss: any = fs.readFileSync((process.cwd() + "/src/swagger/swagger.css"), 'utf8');
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
        this.express.use(requestID());


        this.express.use(ExpressPino({
            serializers: {
                req: (req) => ({
                    method: req.method,
                    url: req.url,
                    traceId: req.raw.requestId
                }),
                res: (res) =>({
                    statusCode: res.statusCode
                })
            },
        }
        ));
    }

    private routes(): void {

        setupRoutes(this.express);

        this.express.get("/", (req, res, next) => {
            res.setHeader('content-type', 'application/json');
            res.send(JSON.stringify({ detail: "Ok" }));
        });

        // swagger docs
        this.express.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, undefined, undefined, this.customCss));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.statusCode = 404;
            res.setHeader('content-type', 'application/json');
            res.send(JSON.stringify({ detail: "Invalid URL" }));
        });
    }
}

export default new App().express;