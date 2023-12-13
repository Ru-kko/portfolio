import dotenv from "dotenv";

dotenv.config();

const env = typeof window === "undefined" ? process.env : {};

const DB_NAME = env.DB_NAME;
const DB_USERNAME = env.DB_USERNAME;
const PORT = env.PORT;
const PAYLOAD_SECRET = env.PAYLOAD_SECRET;
const DB_PORT = env.DB_PORT;
const DB_HOST = env.DB_HOST;
const DB_PASSWORD = env.DB_PASSWORD;

export {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  PORT,
  PAYLOAD_SECRET,
};
