import winston, { createLogger, transports, format } from "winston";
import fs from "fs";
import DailyRotateFile from "winston-daily-rotate-file";
import { isDevelopment, logDirectory } from "../config";

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
const logLevel = isDevelopment ? "debug" : "warn";
const dailyRotateFile = new DailyRotateFile({
  level: logLevel,
  filename: logDirectory + "/%DATE%.json",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  handleExceptions: true,
  maxSize: "20m",
  maxFiles: "14d",
  format: format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    format.json()
  ),
});

export default createLogger({
  transports: [
    new transports.Console({
      level: logLevel,
      format: format.combine(
        winston.format.errors({ stack: true }),
        winston.format.prettyPrint()
      ),
    }),
    dailyRotateFile,
  ],
  exceptionHandlers: [dailyRotateFile],
  exitOnError: false, // do not exit on handled exceptions
});
