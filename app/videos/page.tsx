import React from "react";
import VideoCarousel from "../components/VideoCarousel";

export default function Videos() {

  return (
    <div className="flex flex-col gap-4">
      <label className='text-3xl pt-2'>
        Videos
      </label>
       <VideoCarousel location={'videosPage'} />
    </div>
  )
}
