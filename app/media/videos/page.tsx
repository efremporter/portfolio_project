import React from "react";
import PostCarousel from "../../components/PostCarousel";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link'

export default function Videos() {

  return (
    <div className="flex flex-col gap-4 pt-2">
      <div className="flex items-center gap-2">
        <Link href="/media" className="flex p-2 items-center justify-center rounded-full cursor-pointer hover:bg-[#252525]">
          <ArrowBackIosIcon className="text-3xl pl-1.5" />
        </Link>
        <label className='text-3xl flex items-center justify-center'>
          Videos
        </label>
      </div>
       <PostCarousel type='video' location='videosPage' />
    </div>
  )
}
