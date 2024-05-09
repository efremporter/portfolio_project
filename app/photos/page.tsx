import React from "react";
import PostCarousel from "../components/PostCarousel";

export default function Photos() {

  return (
    <div className="flex flex-col gap-4 pt-2">
      <label className='text-3xl' >
        Photos
      </label>
       <PostCarousel type='photo' location='photosPage' />
    </div>
  )
}
