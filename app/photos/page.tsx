import React from "react";
import PhotoCarousel from "../components/PhotoCarousel";

export default function Photos() {

  return (
    <div className="flex flex-col gap-4">
      <label className='text-3xl pt-2' >
        Photos
      </label>
       <PhotoCarousel location={'photosPage'} />
    </div>
  )
}
