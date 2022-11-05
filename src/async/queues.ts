import * as Bull from "bull";

const brokerUrl = process.env.BROKER_URL;


export const DefaultQueue = new Bull('default', brokerUrl)


console.log(brokerUrl)