import Image from 'next/image'
import React from 'react'

export type PostType = {
  filePath: String
  title: String
  type: String
  takenOn: String
  poster: String | null
}

export default function Post(props: {
  post: PostType
  className?: string
  location?: string
}) {

  const { post } = props
  const src = String(post.filePath)
 
  let correctElement
  if (post.type === 'photo') {
    correctElement = (
      <div className='flex flex-col gap-2'>
        <div className={`rounded-xl ${props.className}`}>
          <Image priority={true} alt={'img'} src={src}
            width={1000} height={1000} className={`rounded-lg select-none object-cover ${props.className}`}
          />
        </div>
        <div className='flex justify-between items-center'>
          <div className='font-sans text-md select-none'>
            {post.title}
          </div>
          {props.location !== 'homePage' && 
            <div className='font-sans text-sm select-none'>
              {post.takenOn}
            </div>
          }
        </div>
      </div>
    )
  } else {
    correctElement = (
      <video controls controlsList='nodownload' preload="auto" loop
        poster={String(post.poster) ?? ''}
        className={`border border-zinc-700 rounded-sm object-cover ${props.className}`}>
        <source src={src} />
      </video>
    )
  }

  return (
    <div className='flex flex-col gap-2 pb-2 select-none'>
      {correctElement}
      {post.type === 'video' && 
        <div className='flex justify-between items-center'>
          <div className='font-sans text-md select-none'>
            {post.title}
          </div>
          <div className='font-sans text-sm'>
            {post.takenOn}
          </div>
        </div>
      }
    </div>
  )
}