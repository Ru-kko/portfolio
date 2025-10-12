import { s3Storage, S3StorageOptions } from '@payloadcms/storage-s3'
import {
  AWS_ACCESS_KEY_ID,
  S3_REGION,
  AWS_SECRET_ACCESS_KEY,
  S3_BUCKET,
  NO_AWS,
  OBJECTS_ENDPOINT,
} from './env'

const s3Config: S3StorageOptions["config"] = {
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
  region: S3_REGION,
  ...(NO_AWS && {
    endpoint: OBJECTS_ENDPOINT,
    forcePathStyle: true,
  }),
}

export const s3Adapter = s3Storage({
  collections: {
    images: true,
  },
  bucket: S3_BUCKET,
  config: s3Config,
})
