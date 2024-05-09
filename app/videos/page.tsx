import React from "react";
import PostCarousel from "../components/PostCarousel";

export default function Videos() {

  return (
    <div className="flex flex-col gap-4 pt-2">
      <label className='text-3xl'>
        Videos
      </label>
       <PostCarousel type='video' location='videosPage' />
    </div>
  )
}
