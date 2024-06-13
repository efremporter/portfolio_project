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

  function handleResize() {
    if (typeof window !== 'undefined') {
      setSmallWindow(window.innerWidth > 1350)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
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

  const humu = <a target='_blank' href="https://support.humu.com/hc/en-us" className="underline hover:text-gray-400">Humu</a>
  const kismet = <a target='_blank' href="https://www.kismethealth.com/" className="underline hover:text-gray-400">Kismet Health</a>
  
  const headerBio = "Hi, I'm Efrem"

  const firstPartBio = (`I'm a software engineer based in San Francisco, California. 
    My coding journey began in 2018, and I’ve been honing my skills ever since. 
    I enjoy building robust and user-friendly applications and tackling 
    complex challenges head-on. Over the years, I've gained extensive experience 
    in various aspects of software development. At `)
    
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
    solutions, whether I'm working on a team or leading a project. When I'm not 
    coding, you can find me either playing pool, enoying a family barbeque, or crushing my 
    friends at Spikeball. Feel free to browse through my portfolio to see some of my work. 
    If you have any questions or would like to connect, don't hesitate to reach out!`)

  const flexClass = smallWindow ? 'flex-row items-start' : 'flex-col items-center align-center'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end items-center h-[3rem] xxs:justify-between">
        <div className='text-3xl hidden xxs:block'>
          About
        </div>
        <div className="flex gap-4 items-center">
          {alertVisible && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" onClose={() => setAlertVisible(false)}>
            Email copied successfully.
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
      <div className={`min-w-[21rem] flex gap-7 p-5 border-2 border-[#252525] rounded-sm ${flexClass} sm:p-10`}>
        <div className="max-w-[40rem] sm:min-w-[40rem] ">
          {aboutMeVideo}
        </div>
        <div className="flex flex-col gap-4 font-sans text-lg">
          <div className="text-xl">{headerBio}</div>
          <div>
            {firstPartBio}{humu}{secondPartBio}{kismet}{thirdPartBio}
          </div>
          <div>{fourthPartBio}</div>
        </div>
      </div>
    </div>
  )
}