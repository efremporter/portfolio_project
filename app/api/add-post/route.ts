import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json()
  const { title, type, takenOn, filePath } = req
  const result = await prisma.post.create({
    data: {
      title,
      type,
      takenOn,filePath
    }
  })
  return NextResponse.json({data: req})
}