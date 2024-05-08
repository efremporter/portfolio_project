"use client"
import Image from "next/image"
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

  const src = 'https://portfolio-project-storage.s3.us-west-1.amazonaws.com/about_me.mp4-1715206198521'
  const aboutMeVideo = (
      <video controls controlsList='nodownload'
        className=" w-[40rem] h-auto rounded-sm">
        <source src={src} />
      </video> 
  )

  const humu = <a target='_blank' href="https://www.humu.com/" className="underline hover:text-gray-400">Humu</a>
  const kismet = <a target='_blank' href="https://www.kismethealth.com/" className="underline hover:text-gray-400">Kismet Health</a>
  const headerBio = "Hi, my name is Efrem Porter"
  const firstPartBio = (`I'm a software engineer from Northern California. 
    I began my journey into coding back in 2018, when I was in highschool.
    I took a couple coding classes and instantly, programming became my favorite subject.
    Immediately after graduating, I pivoted towards a sales career.
    I quickly realized that I wasn't satisfied simply representing the product. I wanted to actually build it.
    Two months after graduating from App Academy's 6-month programming bootcamp,
    I landed my first job as a software engineer at `)
  const secondPartBio = (`
    (HR/Productivity). At Humu I learned how to write Slab documents,
    compose unit tests & E2E tests, implement impression logging, and more.
    Next, I joined `)
  const thirdPartBio = (`
    a very early-stage telehealth startup. Here, I took on much more responsibility as I was responsible for 
    creating responsive and reusable React Components from scratch. These customer-facing
    components were used all over our app. In addition, I learned how to write component tests
    and style components using TailwindCSS. Most importantly, I became more of a leader
    at Kismet, facilitating technical meetings and collaborating closely with our Design team.
    I enjoy all of the daily learning and struggles that come with software engineering.
    Feel free to browse through some of my work and reach out with any questions.
  `)
  const fourthPartBio = "I look forward to speaking with you!"

  const flexClass = smallWindow ? 'flex-row items-start' : 'flex-col items-center align-center'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center h-[3rem]">
        <div className='text-3xl'>
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
      <div className={`flex gap-7 min-w-[40rem] p-10 pr-30 border-2 border-[#252525] rounded-sm ${flexClass}`}>
        {aboutMeVideo}
        {/* <Image priority={true} alt={'img'} src={src}
          width={1000} height={1000} className={`rounded-lg select-none object-cover w-[25rem] h-[25rem]`}
        /> */}
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