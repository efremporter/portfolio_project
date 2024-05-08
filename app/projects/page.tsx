import React from 'react'
import ProjectCarousel from '../components/ProjectCarousel'

export default function Projects() {

  return (
    <div className="flex flex-col gap-4 pt-2">
      <label className='text-3xl' >
        Projects
      </label>
      <ProjectCarousel location='projectsPage' />
    </div>
  )
}