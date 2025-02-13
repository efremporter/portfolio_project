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

  const src = String(filePath)
  const url = String(projectUrl)

  if (props.location === 'projectsPage') {
    return (
      <div className="p-7 rounded-md border-2 border-[#252525] cursor-default">
        <div className="flex flex-col justify-start align-center gap-10 sm:flex-row">
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
            <div className="flex flex-col sm:break-words">
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
        <div className='p-4 w-[27rem] h-auto border-2 border-[#252525] cursor-pointer select-none hover:underline'>
          <div className='flex flex-col gap-2 \'>
            <Image alt='Project' width={1920} height={1080}
              src={src}
              className='w-[27rem] h-[13rem] border-2 border-[#252525] object-cover'  
            />
            <div className='flex flex-col gap-1.5'>
              <div className='text-lg font-normal select-none'>{title}</div>
              <div className='text-[0.8125rem] font-light text-gray-400'>{description}</div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}