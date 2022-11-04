import * as http from "http";
import App from "./app";
import { APILogger } from "./logger/api.logger";
import { AppDataSource } from "./db/data-source";
const port = process.env.PORT || 3070;

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
})
App.set("port", port);
const server = http.createServer(App);
server.listen(port);

const logger = new APILogger();

server.on("listening", function (): void {
    const addr = server.address();
    const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on http://localhost:${port}`, null);
});

module.exports = App;