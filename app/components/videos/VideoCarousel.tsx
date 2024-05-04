import React from 'react'
import Post from '../posts/Post'
import prisma from '@/lib/prisma'

async function getVideos() {
    const videos = await prisma.post.findMany({
      where: {
        type: 'video'
      }
    })
    return videos
}

export default async function PhotoCarousel() {
  
  const videos = await getVideos()
  const placeholder = (
    <div className="w-[23rem] h-[13rem] bg-zinc-700"></div>
  )

  return (
    <div>
      <ul className='flex gap-5 overflow-x-auto custom-scrollbar'>
        {videos.map((video, i) => {
          return (
            <li key={i}>
              {/* {placeholder} */}
              <Post
                post={video}
                className="w-[23rem] h-[13rem]"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}