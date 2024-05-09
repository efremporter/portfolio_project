import React from 'react'
import Post from './Post'
import { countPosts, getPhotos } from '../photos/actions'
import InfiniteScrollCarousel from './InfiniteScrollCarousel'

export default async function PhotoCarousel(props: {
  location: 'photosPage' | 'homePage'
}) {

  const onHomePage = props.location === 'homePage'
  const maxPosts = await countPosts('photo')
  const photos = await getPhotos()
  
  if (onHomePage) {
    return (
      <ul className='flex gap-5 pb-2 overflow-x-auto custom-scrollbar'>
        {photos.map((photo, i) => {
          return (
            <li key={i}>
              <Post
                post={photo}
                className='w-[14rem] h-[14rem]'
              />
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <InfiniteScrollCarousel type='photo' initialPosts={photos} maxPosts={maxPosts} />
    )
  }
}