import Image from 'next/image'
import React from 'react'

export type Post = {
  filePath: String
  title: String
  type: String
}

export default function Post(props: {
  post: Post
  className?: string
}) {

  const { post } = props
  const src = String(post.filePath)

  let correctElement
  if (post.type === 'photo') {
    correctElement = (
      <div className={`rounded-xl ${props.className}`}>
        <Image priority={true} alt={'img'} src={src}
          width={100} height={100} className={`rounded-lg ${props.className}`}
        />
      </div>
    )
  } else {
    correctElement = (
      <video controls controlsList='nodownload'
        className={`${props.className} border border-zinc-700`}>
        <source src={src} />
      </video>
    )
  }

  return (
    <div className='select-none flex flex-col gap-2'>
      {correctElement}  
      <div className='font-sans text-lg pl-3'>
        {post.title}
      </div>
    </div>
  )
}