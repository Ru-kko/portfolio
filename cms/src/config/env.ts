import dotenv from 'dotenv'

dotenv.config()

const env = typeof window === 'undefined' ? process.env : ({} as { [key: string]: string })

const PORT = env.PORT
const PAYLOAD_SECRET = env.PAYLOAD_SECRET ?? ''
const DB_CONNECTION_STRING = env.DB_CONNECTION_STRING ?? ''

const NO_AWS = env.NO_AWS === 'true'
const OBJECTS_ENDPOINT = env.OBJECTS_ENDPOINT ?? ''
const S3_BUCKET = env.S3_BUCKET ?? ''
const S3_REGION = env.S3_REGION ?? ''
const AWS_ACCESS_KEY_ID = env.AWS_ACCESS_KEY_ID ?? ''
const AWS_SECRET_ACCESS_KEY = env.AWS_SECRET_ACCESS_KEY ?? ''

export {
  DB_CONNECTION_STRING,
  PORT,
  PAYLOAD_SECRET,
  S3_BUCKET,
  S3_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  NO_AWS,
  OBJECTS_ENDPOINT,
}
