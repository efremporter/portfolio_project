
import prisma from "@/lib/prisma";
import React from "react";

async function getVideos() {
  const videos = await prisma.post.findFirst({
    where: {
      type: "video"
    }
  })
  return videos
}


export default async function Videos() {
    const video = await getVideos()
    try {
      if (video) {
        console.log('VIDEOS ARE: ', video)
      }
    } catch {
      console.log('ERROR')
  }

  if (!video) return
  return (
    <div className="bg-gray-500">
      <video className="w-[900px] h-[600px]" controls>
        <source src={video.filePath} />
      </video>
    </div>
  )
}
