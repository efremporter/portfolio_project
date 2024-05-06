'use client';
import React from 'react'
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

  const pathname = usePathname()
  const liClassName = 'flex items-center gap-2.5 py-6 cursor-pointer justify-center hover:bg-zinc-700'
  return (
    <ul className='z-10 text-white bg-black flex flex-row justify-evenly text-xl border-0 border-b-2 sticky top-0 border-zinc-700'>
      <Link className='flex flex-1' href="/">
        <li className={`${liClassName} flex-1`}>
          {pathname === '/' ? <HomeIcon fontSize='large' /> : <HomeOutlinedIcon fontSize='large' />}
          Home
        </li>
      </Link>
      <Link className='flex flex-1' href="">
        <li className={`${liClassName} flex-1`}>
          {pathname === '/projects' ? <FolderCopyIcon fontSize='large' /> : <FolderCopyOutlinedIcon fontSize='large' />}
          Projects
        </li>
      </Link>
      <Link className='flex flex-1' href="/videos">
        <li className={`${liClassName} flex-1`}>
          {pathname === '/videos' ? <VideoCameraBackIcon fontSize='large' /> : <VideoCameraBackOutlinedIcon fontSize='large' />}
          Videos
        </li>
      </Link>
      <Link className='flex flex-1' href="/photos">
        <li className={`${liClassName} flex-1`}>
          {pathname === '/photos' ? <ImageIcon fontSize='large' /> : <ImageOutlinedIcon fontSize='large' />}
          Photos
        </li>
      </Link>
      <Link className='flex flex-1' href="/about">
        <li className={`${liClassName} flex-1`}>
          {pathname === '/about' ? <PersonIcon fontSize='large' /> : <PersonOutlinedIcon fontSize='large' />}
          About
        </li>
      </Link>
    </ul>
  )
}