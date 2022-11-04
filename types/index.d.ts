import { Logger } from "pino";

declare module 'express' {
    interface Request {
      log?: Logger
    }
  }