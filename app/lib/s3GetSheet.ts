import { s3 } from "./s3";
import { Row } from "./types";

export async function s3GetSheet() {
  const o = await s3
    .getObject({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: process.env.AWS_FILE_NAME!,
    })
    .promise();
  console.log({ o });
  return JSON.parse(o.Body!.toString()) as Row[];
}