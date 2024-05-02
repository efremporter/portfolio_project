import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
  }
})

async function uploadImageToS3Bucket(file, fileName) {
  const fileBuffer = file
  console.log('FILENAME', fileName)
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${fileName}-${Date.now()}`,
    Body: fileBuffer,
    ContentType: "image/jpg"
  }

  const command = new PutObjectCommand(params)
  console.log('command', command)
  await s3Client.send(command)
  console.log('after command', 'HERE')
  return fileName
}

export async function POST(request) {

  try {
    const formData = await request.formData()
    const file = formData.get("file")
    if (!file) {
      return NextResponse.json({ error: 'File is required.' }, { status: 400 })
    }
    const buffer = Buffer.from(await file.arrayBuffer())
    const fileName = await uploadImageToS3Bucket(buffer, file.name)
    return NextResponse.json({ success: true, fileName })
  } catch {
    return NextResponse.json({ error: "Error uploading item" })
  }
}