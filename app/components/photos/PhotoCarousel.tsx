import React from 'react'
import Post from '../posts/Post'
import prisma from '@/lib/prisma'

async function getPhotos() {
    const photos = await prisma.post.findMany({
      where: {
        type: 'photo'
      }
    })
    return photos
}

export default async function PhotoCarousel() {
  
const photos = await getPhotos()
  
 const placeholder = (
    <div className="w-[15rem] h-[14rem] bg-zinc-700"></div>
  )

  return (
    <div>
      <ul className='flex gap-5 overflow-x-scroll custom-scrollbar'>
        {photos.map((photo, i) => {
          return (
            <li key={i}>
              {placeholder}
              {/* <Post
                post={photo}
                className="w-[15rem] h-[14rem]"
              /> */}
            </li>
          )
        })}
      </ul>
    </div>
  )
}