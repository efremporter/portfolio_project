import React from 'react'
import VideoCarousel from './components/videos/VideoCarousel'
// import SearchBar from './header/SearchBar'
// import Header from './header/Header'
import PhotoCarousel from './components/photos/PhotoCarousel'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex flex-col h-full gap-16'>
      <div className='flex flex-col gap-3  '>
        <Link href="/videos" className='text-2xl pl-3 hover:underline'>
            Videos
        </Link>
        <VideoCarousel location={'homePage'} />
      </div>
      <div className='flex flex-col gap-3'>
        <label className='text-2xl pl-3' >
          Photos
        </label>
        <PhotoCarousel />
      </div>
    </div>
  )
}