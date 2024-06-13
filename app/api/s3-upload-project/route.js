import prisma from "@/lib/prisma";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
  }
})

async function uploadImageToS3Bucket(file, fileName) {
  const fileBuffer = file
  const filePathPrefix = 'https://portfolio-project-storage.s3.us-west-1.amazonaws.com/'
  const s3FileName = `${fileName}-${Date.now()}`
  const filePathName = `${filePathPrefix}${s3FileName}`
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: s3FileName,
    Body: fileBuffer,
    ContentType: 'image/jpg'
  }

  const command = new PutObjectCommand(params)
  await s3Client.send(command)
  return filePathName
}

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file")
    const title = formData.get("title")
    const description = formData.get("description")
    const languages = formData.get("languages")
    const createdOn = formData.get("createdOn")
    const projectUrl = formData.get("projectUrl")

    
    if (!file || !title || !description || !languages || !createdOn || !projectUrl) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }
    const buffer = Buffer.from(await file.arrayBuffer())
    const filePath = await uploadImageToS3Bucket(buffer, file.name)
    try {
      const data = {
        title,
        description,
        languages,
        createdOn,
        projectUrl,
        filePath,
      }
      const newProject = await prisma.project.create({ data })
      if (newProject) {
        return NextResponse.json({ success: true, newProject })
      } else {
        return NextResponse.json({ error: "Error creating post" })
      }
    } catch {
      return NextResponse.json({ error: "Error creating project" })
    }
  } catch {
    return NextResponse.json({ error: "Error uploading item" })
  }
}