import pino from "pino";

export const Logger = pino({
    name: 'app-name',
    level: 'debug'
});
