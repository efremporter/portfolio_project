import React, { useRef } from 'react'
import Post from './Post'
import { countPosts, getPhotos } from '../photos/actions'
import InfiniteScrollCarousel from './InfiniteScrollCarousel'

export default async function PhotoCarousel(props: {
  location: 'photosPage' | 'homePage'
}) {

  const onHomePage = props.location === 'homePage'

  const maxPosts = await countPosts('photo')
  const photos = await getPhotos()

  let ulClassName = ''
  let photoClassName = ''
  if (onHomePage) {
    ulClassName = "gap-5 pb-2 overflow-x-auto custom-scrollbar"
    photoClassName = "w-[14rem] h-[14rem]"
  } else {
    ulClassName = "gap-4 flex-wrap justify-evenly border-l-2 border-[#252525]"
    photoClassName = "w-[20rem] h-[20rem] object-cover"
  }
  
  if (onHomePage) {
    return (
      <ul className={`flex ${ulClassName}`}>
        {photos.map((photo, i) => {
          return (
            <li key={i}>
              {/* {placeholder} */}
              <Post
                post={photo}
                className={`${photoClassName}`}
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