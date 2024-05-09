import React from "react";
import PhotoCarousel from "../components/PhotoCarousel";
import InfiniteScrollCarousel from "../components/InfiniteScrollCarousel";

export default function Photos() {

  return (
    <div className="flex flex-col gap-4 pt-2">
      <label className='text-3xl' >
        Photos
      </label>
       <PhotoCarousel location={'photosPage'} />
    </div>
  )
}
