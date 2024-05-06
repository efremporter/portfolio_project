import React from "react";
import VideoCarousel from "../components/VideoCarousel";

export default async function Videos() {

  return (
    <div className="flex flex-col gap-4">
      <label className='text-2xl pl-3' >
        Videos
      </label>
       <VideoCarousel location={'videosPage'} />
    </div>
  )
}
