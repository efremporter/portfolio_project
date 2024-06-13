import React from 'react'
import Link from 'next/link'
import ProjectCarousel from './components/ProjectCarousel'
import AboutPage from './about/AboutPage'
import PostCarousel from './components/PostCarousel'

export default function HomePage() {
  return (
    <div className='flex flex-col h-full gap-4 pt-2 min-w-[250px]'>
      <AboutPage homePage={true}/>
      <div className='flex flex-col gap-3'>
        <div className="flex justify-between items-center">
          <div className='text-3xl select-none'>
              <Link href='/projects' className='select-none hover:underline'>Projects</Link>
          </div>
          <Link href='/projects' className='select-none hover:underline'>View all</Link>
        </div>
        <ProjectCarousel location={'homePage'} />
      </div>

      <div className='flex flex-col gap-3'>
        <div className="flex justify-between items-center">
          <div className='text-3xl select-none'>
              Photos
          </div>
          <Link href='/media' className='select-none hover:underline'>View media</Link>
        </div>
        <PostCarousel type="photo" location={'homePage'} />
      </div>
    </div>
  )
}