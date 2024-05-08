import React from 'react'
import Post from './Post'
import prisma from '@/lib/prisma'

async function getPhotos(limit?: number) {
    if (limit) {
      return await prisma.post.findMany({
        where: {
          type: 'photo'
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: limit
      })
    } else {
      return await prisma.post.findMany({
        where: {
          type: 'photo'
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: 15 // change to pagination function later
      })
    }
}

export default async function PhotoCarousel(props: {
  location: 'photosPage' | 'homePage'
}) {

let photos 
if (props.location === 'homePage') {
  photos = await getPhotos(10)
} else {
  photos = await getPhotos()
}
// const photos = [1, 2, 3, 4, 5, 6, 7]
  
  const placeholder = (
    <div className="w-[14rem] h-[14rem] bg-zinc-700"></div>
  )

  let ulClassName = ''
  let photoClassName = ''
  if (props.location === 'homePage') {
    ulClassName = "gap-5 pb-2 overflow-x-auto custom-scrollbar"
    photoClassName = "w-[14rem] h-[14rem]"
  } else {
    ulClassName = "gap-4 flex-wrap justify-evenly border-l-2 border-[#252525]"
    photoClassName = "w-[20rem] h-[20rem] object-cover"
  }

  return (
    <ul className={`flex ${ulClassName}`}>
      {photos.map((photo, i) => {
        return (
          <li key={i}>
            {/* {placeholder} */}
            <Post
              post={photo}
              className={`${photoClassName}`}
            />
          </li>
        )
      })}
    </ul>
  )
}