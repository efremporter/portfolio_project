"use client"
import React, { useEffect, useState } from "react"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';

export default function AboutPage() {

  useEffect(() => handleResize(), [])

  const [smallWindow, setSmallWindow] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  function handleResize() {
    if (typeof window !== 'undefined') {
      setSmallWindow(window.innerWidth > 1350)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
  function getBio() {
    if (showVideo) {
      return (
        <div className="max-w-[40rem] sm:min-w-[40rem]">
          {aboutMeVideo}
        </div>
      )
    }
    if (showMore) {
      return (
        <div className="relative flex flex-col items-center gap-5">
          <div>{bio}</div>
        </div>
      )
    } else {
      return (
        <div className="flex flex-col gap-4 font-sans text-xl text-black">
          <div>{firstPartBio}</div>
        </div>
      )
    }
  }

  function handleShowMore() {
    setShowMore(!showMore)
  }

  function handleFormatChange(type: string) {
    if (type === 'video') {
      if (!showVideo) {
        setShowVideo(true)
      }
    } else {
      if (showVideo) {
        setShowVideo(false)
      }
    }
  }

  function handleEmailClick() {
    navigator.clipboard.writeText("eopiscool@gmail.com").then(() => {
      setAlertVisible(true)
      setTimeout(() => {
        setAlertVisible(false)
      }, 4000)
    })
  }

  const src = 'https://duuwxj0q87zix.cloudfront.net/about_me.mp4-1715838564387'
  const poster = 'https://duuwxj0q87zix.cloudfront.net/about_me.png'
  const width = smallWindow ? "w-[40rem]" : "min-w-[20rem]"
  const aboutMeVideo = (
      <video controls controlsList='nodownload' loop
        poster={poster}
        className={`${width} h-auto rounded-sm`} preload="auto">
        <source src={src} />
      </video> 
  )

  const humuAnchor = <a target='_blank' href="https://support.humu.com/hc/en-us" className="underline hover:text-gray-500">Humu</a>
  const kismet = <a target='_blank' href="https://www.kismethealth.com/" className="underline hover:text-gray-500">Kismet Health</a>
  const humu = (
    <>
      <span>At {humuAnchor}</span>
    </>
  )
  const header = "Efrem's Portfolio"
  const headerBio = "Hi, I'm Efrem"
  const correctPadding = showVideo ? '' : 'p-10'
  const correctBackgroundStyle = showVideo ? "" : "p-6 gap-4 bg-gray-300 rounded-xl"

  const firstPartBio = (`I'm a software engineer based in San Francisco, California. 
    My coding journey began in 2018, and I’ve been honing my skills ever since. 
    I enjoy building robust and user-friendly applications and tackling 
    complex challenges head-on. Over the years, I've gained extensive experience 
    in various aspects of software development. `)
    
  const secondPartBio = (`, I worked on an HR/Productivity tool. In addition to 
    developing, I improved my skills writing Slab documents, unit tests & E2E tests, 
    impression logging and more. My time at `) 

  const thirdPartBio = (` allowed me to delve deeper into HealthTech and the start up space. 
    There, I was responsible for creating responsive and reusable React Components 
    from scratch, writing component tests and styling components using TaliwindCSS,
    and facilitating cross-functional collaboration with stakeholders and our design
    team. I am a lover of learning and thrive when challenged by new engineering adventures.`)
 
  const fourthPartBio = (`I am proficient in Ruby on Rails, Python, NodeJS, writing 
    component tests and end-to-end tests, and I have a particular affinity for 
    React, Redux, NextJS, TailwindCSS, TypeScript, JavaScript, PostgreSQL, and 
    AWS (S3 and CloudFront). My goal is always to create impactful and efficient 
    solutions, whether I'm working on a team or leading a project. `)

  const fifthPartBio = (`When I'm not 
    coding, you can find me either playing pool, enoying a family barbeque, or crushing my 
    friends at Spikeball. Feel free to browse through my portfolio to see some of my work and learn more about me. `)

  const sixthPartBio = (`
    If you have any questions or would like to connect, don't hesitate to reach out!`)

  const bio = (
    <div className="flex flex-col gap-4 font-sans text-xl text-black">
      <div>
        {firstPartBio}{humu}{secondPartBio}{kismet}{thirdPartBio}
      </div>
      <div>{fourthPartBio}</div>
      <div>{fifthPartBio}</div>
      <div>{sixthPartBio}</div>
    </div>
  )

  const emailCopyMessage = smallWindow ? "Email copied successfully" : "Success"
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end items-center mb-2 h-[3rem] xxs:justify-between">
        <div className='text-3xl select-none hidden xxs:block sm:text-4xl'>
          {header}
        </div>
        <div className="flex gap-4 items-center relative">
          {alertVisible && <Alert className="z-10" icon={<CheckIcon fontSize="inherit" />} severity="success" onClose={() => setAlertVisible(false)}>
            {emailCopyMessage}
          </Alert>}
          <a target="_blank" href="https://www.linkedin.com/in/efrem-porter-550b0b224/">
            <LinkedInIcon fontSize="large" className="cursor-pointer text-gray-100 hover:text-gray-400"/>
          </a>
          <a target="_blank" href="https://github.com/efremporter/">
            <GitHubIcon fontSize="large" className="cursor-pointer text-gray-100 hover:text-gray-400"/>
          </a>
          <div onClick={handleEmailClick}>
            <EmailIcon fontSize="large" className="cursor-pointer text-gray-100 hover:text-gray-400"/>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="flex items-center justify-start gap-3 text-2xl pl-1 pb-2">
          <div className={`cursor-pointer ${showVideo ? '' : 'underline'}`} onClick={() => handleFormatChange('text')}>Text</div>
          <div>|</div>
          <div className={`cursor-pointer ${showVideo ? 'underline' : ''}`} onClick={() => handleFormatChange('video')}>Video</div>
        </div>
        <div className="flex flex-col border border-[#c1bbb7] rounded-md bg-[#121211]">
          <div className={`min-w-[21rem] gap-3 flex bg-green-20 p-5 flex-col items-center align-center sm:${correctPadding} sm:pb-2`}>
            {!showVideo && <div className="self-start font-sans text-2xl text-gray-100">
              {headerBio}
            </div>}
            <div className={`flex flex-col ${correctBackgroundStyle}`}>
              {getBio()}
            </div>
          </div>
          {!showVideo && <div onClick={handleShowMore}
            className="self-end text-right w-full pb-2 pr-3 text-gray-100 text-base cursor-pointer hover:underline"
          >
            Show {showMore ? 'Less' : 'More'}
          </div>}
        </div>
      </div> */}
    </div>
  )
}