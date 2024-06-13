import React from "react";
import PostCarousel from "../components/PostCarousel";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link'

export default function Photos() {

  return (
    <div className="flex flex-col gap-5 pt-2">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className='text-3xl select-none'>
              Videos
          </div>
            <Link href='/media/videos' className='select-none hover:underline'>View all</Link>
        </div>
        <PostCarousel type='video' location='homePage' />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className='text-3xl select-none'>
              Photos
          </div>
          <Link href='/media/photos' className='select-none hover:underline'>View all</Link>
        </div>
        <PostCarousel type="photo" location={'homePage'} />
      </div>
    </div>
  )
}