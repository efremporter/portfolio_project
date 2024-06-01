import React from 'react'
import Link from 'next/link'
import ProjectCarousel from './components/ProjectCarousel'
import PostCarousel from './components/PostCarousel'

export default function HomePage() {
  return (
    <div className='flex flex-col h-full gap-3 pt-2 min-w-[250px]'>

      <div className='flex flex-col gap-3'>
        <div className="flex justify-between items-center">
          <div className='text-3xl'>
              Videos
          </div>
          <Link href='/videos' className='hover:underline'>View all</Link>
        </div>
        <PostCarousel type="video" location={'homePage'} />
      </div>

      <div className='flex flex-col gap-3'>
        <div className="flex justify-between items-center">
          <div className='text-3xl'>
              Photos
          </div>
          <Link href='/photos' className='hover:underline'>View all</Link>
        </div>
        <PostCarousel type="photo" location='homePage' />
      </div>

      <div className='flex flex-col gap-3'>
        <div className="flex justify-between items-center">
          <div className='text-3xl'>
              Projects
          </div>
          <Link href='/projects' className='hover:underline'>View all</Link>
        </div>
        <ProjectCarousel location={'homePage'} />
      </div>
    </div>
  )
}