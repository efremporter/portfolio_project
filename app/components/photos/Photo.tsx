import Image from 'next/image'
import React from 'react'

export type Photo = {
  filePath: String
  title: String
}

export default function Photo(props: {
  photo: Photo
  width: Number
  height: Number
}) {

  const { photo, width, height } = props
  const src = String(photo.filePath)

  return (
    <div className='select-none'>
      <div className='w-[15rem] h-[14rem] bg-blue-600 rounded-xl'>
        <Image priority={true} alt={'img'} src={src}
          width={100} height={100} className='w-[15rem] h-[14rem]' />
      </div>
      <div className='flex justify-center'>
        <div className='font-sans text-lg'>
          {photo.title}
        </div>
      </div>
    </div>
  )
}