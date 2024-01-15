import { s3 } from "./s3";

export async function s3UpdateSheet(sheet: any) {
  console.log("s3UpdateSheet", sheet);
  await s3
    .putObject({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: process.env.AWS_FILE_NAME!,
      Body: JSON.stringify(sheet),
    })
    .promise();
}