import Image from 'next/image'
import React from 'react'

export type PostType = {
  filePath: String
  title: String
  type: String
}

export default function Post(props: {
  post: PostType
  className?: string
}) {

  const { post } = props
  const src = String(post.filePath)

  let correctElement
  if (post.type === 'photo') {
    correctElement = (
      <div className={`rounded-xl ${props.className}`}>
        <Image priority={true} alt={'img'} src={src}
          width={1000} height={1000} className={`rounded-lg select-none object-cover ${props.className}`}
        />
      </div>
    )
  } else {
    correctElement = (
      <video controls controlsList='nodownload'
        className={`border border-zinc-700 rounded-sm ${props.className}`}>
        <source src={src} />
      </video>
    )
  }

  return (
    <div className='flex flex-col gap-2 pb-2 '>
      {correctElement}  
      <div className='font-sans text-lg pl-3'>
        {post.title}
      </div>
    </div>
  )
}