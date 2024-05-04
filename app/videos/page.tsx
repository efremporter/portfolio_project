
import prisma from "@/lib/prisma";
import React from "react";
import Post from '../components/posts/Post'
import VideoCarousel from "../components/videos/VideoCarousel";

export default async function Videos() {

  return (
    <div className="flex flex-col gap-4">
      <label className='text-2xl pl-3' >
        Videos
      </label>
       <VideoCarousel location={'videosPage'} />
    </div>
  )
}
