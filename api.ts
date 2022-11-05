import * as http from "http";
import App from "./app";
import { Logger } from "./src/logger/api.logger";
const port = process.env.PORT || 3070;

App.set("port", port);
const server = http.createServer(App);
server.listen(port);


server.on("listening", function (): void {
    const addr = server.address();
    Logger.info(`Listening on http://localhost:${port}`);
});

module.exports = App;