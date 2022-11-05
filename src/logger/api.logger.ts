import pino from "pino";


export function getLogger(name){
    return pino({
        name:name,
        level: "debug"
    })
}