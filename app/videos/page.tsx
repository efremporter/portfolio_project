
import prisma from "@/lib/prisma";
import React, { useState } from "react";

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
        // setVideos((videos))
      }
    } catch {
      console.log('ERROR')
    // }
  }

  if (!video) return
  return (
    <div className="w-40 h-40 bg-gray-500">
      <video className="w-80 h-80" controls>
        <source src={video.filePath} />
      </video>
    </div>
  )
}
