import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';
import React from 'react';

type Project = {
  title: String
  url: String
  languages: String
  createdOn: String
  filePath: String
}


export default function Project(props:{
  project?: Project
  className?: string
}) {

  // const { project } = props
  const project = {
    title: 'Facecrook (clone of Facebook)',
    url: 'https://www.linkedin.com/posts/activity-6916572952155078656-uhYz?utm_source=share&utm_medium=member_desktop',
    languages: 'React/Redux, JavaScript, Ruby on Rails, PostgreSQL',
    created: 'January 2022',
    filepath: 'https://portfolio-project-storage.s3.us-west-1.amazonaws.com/Untitled.png-1715031615759'
  }

  const imgPlaceholder = (
    <div className="min-w-[24rem] h-[15rem] bg-gray-500 border-2 border-[#252525]" />
  )

  return (
    <div className="p-7 rounded-md border-2 border-[#252525] cursor-default">
      <div className="flex flex-row justify-start align-center gap-10">
        {/* {imgPlaceholder} */}
        <Image alt='Project' width={100} height={100}
          src="https://portfolio-project-storage.s3.us-west-1.amazonaws.com/Untitled.png-1715031615759"
          className='w-[24rem] h-[15rem] border-2 border-[#252525]'  
        />
        <div className="flex flex-col justify-between gap-1">
          <div className="flex flex-col">
            <div className="text-[#A1A1A1]">Title</div>
            <div>{project.title}</div>
          </div>
          <div className="flex flex-col break-words">
            <div className="text-[#A1A1A1] flex flex-row gap-1.5 items-center">
              Pathname
              <OpenInNewIcon fontSize='small' />
            </div>
            <a href={project.url} target="blank" className='flex overflow-hidden break-words hover:underline'>
              {project.url}
            </a>
          </div>
          <div className='flex flex-col'>
            <div className="text-[#A1A1A1]">Languages</div>
            <div>{project.languages}</div>
          </div>
          <div className='flex flex-col'>
            <div className="text-[#A1A1A1]">Created</div>
            <div>{project.created}</div>
          </div>
        </div>
      </div>
    </div>
  )
}