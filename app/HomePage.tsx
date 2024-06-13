import React from 'react'
import Link from 'next/link'
import ProjectCarousel from './components/ProjectCarousel'
import PostCarousel from './components/PostCarousel'

export default function HomePage() {
  return (
    <div className='flex flex-col h-full gap-3 pt-2 min-w-[250px]'>
      <div className='flex flex-col gap-3'>
        <div className="flex justify-between items-center">
          <div className='text-3xl select-none'>
              Projects
          </div>
          <Link href='/projects' className='select-none hover:underline'>View all</Link>
        </div>
        <ProjectCarousel location={'homePage'} />
      </div>
    </div>
  )
}