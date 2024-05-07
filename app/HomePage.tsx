import React from 'react'
import VideoCarousel from './components/VideoCarousel'
// import SearchBar from './header/SearchBar'
// import Header from './header/Header'
import PhotoCarousel from './components/PhotoCarousel'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex flex-col h-full gap-7'>
      <div className='flex flex-col gap-3'>
        <div className="flex justify-between items-center">
          <div className='text-3xl'>
              Photos
          </div>
          <Link href='/photos' className='hover:underline'>View all</Link>
        </div>
        <PhotoCarousel location={'homePage'} />
      </div>
      <div className='flex flex-col gap-3  '>
        <div className="flex justify-between items-center">
          <div className='text-3xl'>
              Videos
          </div>
          <Link href='/videos' className='hover:underline'>View all</Link>
        </div>
        <VideoCarousel location={'homePage'} />
      </div>
    </div>
  )
}