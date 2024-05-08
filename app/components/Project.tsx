import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';
import React from 'react';

type Project = {
  title: String
  description: string
  languages: String
  createdOn: String
  projectUrl: String
  filePath: String
}


export default function Project(props:{
  project: Project
  location: 'projectsPage' | 'homePage'
  className?: string
}) {

  const { title, description, languages, createdOn, projectUrl, filePath } = props.project
  const projectPlaceholder = {
    title: 'Facecrook (clone of Facebook)',
    description: 'Full stack clone of Facebook. Users can create an account, post, comment, like, add friends, and more!',
    languages: 'React/Redux, JavaScript, Ruby on Rails, PostgreSQL',
    createdOn: 'January 2022',
    projectUrl: 'https://www.linkedin.com/posts/activity-6916572952155078656-uhYz?utm_source=share&utm_medium=member_desktop',
    filepath: 'https://portfolio-project-storage.s3.us-west-1.amazonaws.com/Untitled.png-1715107917529',
  }

  const imgPlaceholder = (
    <div className="min-w-[24rem] h-[15rem] bg-gray-500 border-2 border-[#252525]" />
  )

  const src = String(filePath)
  const url = String(projectUrl)

  if (props.location === 'projectsPage') {
    return (
      <div className="p-7 rounded-md border-2 border-[#252525] cursor-default">
        <div className="flex flex-row justify-start align-center gap-10">
          {/* {imgPlaceholder} */}
          <Image priority={true} alt='Project' width={1920} height={1080}
            src={src}
            className='w-[27rem] h-[14rem] border-2 border-[#252525] object-cover'  
          />
          <div className="flex flex-col justify-between gap-1">
            <div className="flex flex-col">
              <div className="text-[#A1A1A1]">Title</div>
              <a href={url} target="blank" className='flex items-center gap-1.5 break-words hover:underline'>
                <div>{title}</div>
                <OpenInNewIcon fontSize='small' />
              </a>
            </div>
            <div className="flex flex-col break-words">
              <div className="text-[#A1A1A1]">Description</div>
              {description}
            </div>
            <div className='flex flex-col'>
              <div className="text-[#A1A1A1]">Languages</div>
              <div>{languages}</div>
            </div>
            <div className='flex flex-col'>
              <div className="text-[#A1A1A1]">Created</div>
              <div>{createdOn}</div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <a href={url} target="_blank">
        <div className='p-4 w-[27rem] h-auto border-2 border-[#252525] cursor-pointer hover:underline'>
          <div className='flex flex-col gap-2'>
            <Image alt='Project' width={1920} height={1080}
              src={src}
              className='w-[27rem] h-[13rem] border-2 border-[#252525] object-cover'  
            />
            <div className='flex flex-col gap-1.5'>
              <div className='text-lg font-normal'>{title}</div>
              <div className='text-[0.8125rem] font-light text-gray-400'>{description}</div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}