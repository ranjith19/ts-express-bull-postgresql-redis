import * as http from "http";
import App from "./app";
import { APILogger } from "./logger/api.logger";
const port = process.env.PORT || 3070;

App.set("port", port);
const server = http.createServer(App);
server.listen(port);

const logger = new APILogger();

server.on("listening", function (): void {
    const addr = server.address();
    logger.info(`Listening on http://localhost:${port}`, null);
});

module.exports = App;