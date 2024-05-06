import React from 'react'
import Post from './Post'
import prisma from '@/lib/prisma'

async function getVideos() {
    const videos = await prisma.post.findMany({
      where: {
        type: 'video'
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 10
    })
    return videos
}

export default async function VideoCarousel(props: {
  location: 'videosPage' | 'homePage'
}) {
  
  const videos = await getVideos()
  const placeholder = (
    <div className="w-[20rem] h-[13rem] bg-zinc-300"></div>
  )
  let ulClassName = ''
  let videoClassName = ''
  if (props.location === 'homePage') {
    ulClassName = "gap-5 overflow-x-auto custom-scrollbar"
    videoClassName = "min-w-[20rem] h-auto min-h-[14rem]"
  } else {
    ulClassName = "gap-4 flex-wrap justify-evenly"
    videoClassName = "w-[30rem] h-auto"
  }

  return (
    <div>
      <ul className={`flex ${ulClassName}`}>
        {videos.map((video, i) => {
          return (
            <li key={i}>
              {/* {placeholder} */}
              <Post
                post={video}
                className={`${videoClassName}`}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}