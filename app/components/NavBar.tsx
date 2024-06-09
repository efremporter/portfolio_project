'use client';
import React, { useEffect, useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ImageIcon from '@mui/icons-material/Image';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavBar() {

  useEffect(() => handleResize(), [])

  const [showLabels, setShowLabels] = useState(true)

  function handleResize() {
    if (typeof window !== 'undefined') {
      setShowLabels(window.innerWidth > 850)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }

  function getSelectedBorder(currentPathname: string, pathname: string) {
    if (currentPathname.slice(1) === pathname) {
      return 'border-b border-gray-200'
    }
    return ''
  }

  const pathname = usePathname()
  const liClassName = 'flex items-center gap-2.5 py-6 cursor-pointer justify-center hover:bg-[#252525]'
  return (
    <ul className='z-10 text-gray-100 bg-[#080A08] flex flex-row justify-evenly text-xl border-b-2 sticky top-0 border-[#252525] min-w-[250px] select-none'>
      <Link className='flex flex-1' href="/">
        <li className={`${liClassName} ${getSelectedBorder(pathname, '')} flex-1 `}>
          {pathname === '/' ? <HomeIcon fontSize='large' /> : <HomeOutlinedIcon fontSize='large' />}
          {showLabels && 'Home'}
        </li>
      </Link>
      <Link className='flex flex-1' href="/projects">
        <li className={`${liClassName} ${getSelectedBorder(pathname, 'projects')} flex-1`}>
          {pathname === '/projects' ? <FolderCopyIcon fontSize='large' /> : <FolderCopyOutlinedIcon fontSize='large' />}
          {showLabels && 'Projects'}
        </li>
      </Link>
      <Link className='flex flex-1' href="/videos">
        <li className={`${liClassName} ${getSelectedBorder(pathname, 'videos')} flex-1`}>
          {pathname === '/videos' ? <VideoCameraBackIcon fontSize='large' /> : <VideoCameraBackOutlinedIcon fontSize='large' />}
          {showLabels && 'Videos'}
        </li>
      </Link>
      <Link className='flex flex-1' href="/photos">
        <li className={`${liClassName} ${getSelectedBorder(pathname, 'photos')} flex-1`}>
          {pathname === '/photos' ? <ImageIcon fontSize='large' /> : <ImageOutlinedIcon fontSize='large' />}
          {showLabels && 'Photos'}
        </li>
      </Link>
      <Link className='flex flex-1' href="/about">
        <li className={`${liClassName} ${getSelectedBorder(pathname, 'about')} flex-1`}>
          {pathname === '/about' ? <PersonIcon fontSize='large' /> : <PersonOutlinedIcon fontSize='large' />}
          {showLabels && 'About'}
        </li>
      </Link>
    </ul>
  )
}