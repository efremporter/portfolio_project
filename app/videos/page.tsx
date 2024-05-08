import React from "react";
import VideoCarousel from "../components/VideoCarousel";

export default function Videos() {

  return (
    <div className="flex flex-col gap-4 pt-2">
      <label className='text-3xl'>
        Videos
      </label>
       <VideoCarousel location={'videosPage'} />
    </div>
  )
}
