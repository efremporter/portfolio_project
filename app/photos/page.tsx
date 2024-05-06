
import prisma from "@/lib/prisma";
import React from "react";
import Post from '../components/Post'
import PhotoCarousel from "../components/PhotoCarousel";

export default async function Videos() {

  return (
    <div className="flex flex-col gap-4">
      <label className='text-2xl' >
        Photos
      </label>
       <PhotoCarousel location={'photosPage'} />
    </div>
  )
}
