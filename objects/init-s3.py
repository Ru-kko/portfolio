import json
import os
import boto3

ACCESS_KEY = os.getenv("AWS_ACCESS_KEY_ID")
SECRET_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
BUCKET_NAME = os.getenv("S3_BUCKET")

s3 = boto3.client(
  "s3",
  aws_access_key_id=ACCESS_KEY,
  aws_secret_access_key=SECRET_KEY,
  endpoint_url="http://localhost:4566",
)

s3.create_bucket(Bucket=BUCKET_NAME)

policy = {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": f"arn:aws:s3:::{BUCKET_NAME}/*",
    },
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:PutObject",
      "Resource": f"arn:aws:s3:::{BUCKET_NAME}/*",
    },
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:DeleteObject",
      "Resource": f"arn:aws:s3:::{BUCKET_NAME}/*",
    },
  ],
}

s3.put_bucket_policy(Bucket=BUCKET_NAME, Policy=json.dumps(policy))
print(f"Bucket '{BUCKET_NAME}' created with public read access and restricted write/delete access.")