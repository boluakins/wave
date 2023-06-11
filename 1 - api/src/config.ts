import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 3000;
export const liveRateUrl = process.env.LIVE_RATES_URL || "";
export const isDevelopment =
  (process.env.NODE_ENV || "production") === "development";
  export const logDirectory = process.env.LOG_DIR || "/";
