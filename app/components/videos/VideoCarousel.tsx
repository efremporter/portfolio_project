import React, { useState } from 'react'
import Post from '../posts/Post'
import prisma from '@/lib/prisma'

async function getVideos() {
  // Figure out how to load only 10 or so at a time
    const videos = await prisma.post.findMany({
      where: {
        type: 'video'
      }
    })
    return videos
}

export default async function VideoCarousel(props: {
  location: 'videosPage' | 'homePage'
}) {
  
  const videos = await getVideos()
  const placeholder = (
    <div className="w-[23rem] h-[13rem] bg-zinc-300"></div>
  )

  let ulClassName = ''
  let videoClassName = ''
  if (props.location === 'homePage') {
    ulClassName = "gap-5 overflow-x-auto custom-scrollbar"
    videoClassName = "min-w-[23rem] "
  } else {
    ulClassName = "gap-4 flex-wrap justify-center"
    videoClassName = "min-w-[23rem] h-[13rem]"
  }

  return (
    <div>
      <ul className='flex gap-5 overflow-x-auto custom-scrollbar'>
        {videos.map((video, i) => {
          return (
            <li key={i}>
              {/* {placeholder} */}
              <Post
                post={video}
                className="min-w-[23rem]"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}