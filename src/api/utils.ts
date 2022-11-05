import * as express from "express";

export const sendJsonResponse = (res:express.Response, data: any) => {
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(data));
}