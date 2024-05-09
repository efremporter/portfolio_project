import React from 'react'
import Post from './Post'
import InfiniteScrollCarousel from './InfiniteScrollCarousel'
import { countPosts, getVideos } from '../photos/actions'

export default async function VideoCarousel(props: {
  location: 'videosPage' | 'homePage'
}) {
  
  const onHomePage = props.location === 'homePage'
  const maxPosts = await countPosts('video')
  const videos = await getVideos()

  if (onHomePage) {
    return (
      <ul className='flex gap-5 pb-2 overflow-x-auto custom-scrollbar'>
        {videos.map((video, i) => {
          return (
            <li key={i}>
              <Post
                post={video}
                className='min-w-[20rem] max-w-[30rem] h-auto max-h-[20rem] min-h-[14rem]'
              />
            </li>
          )
        })}
      </ul>
    )
  } else {
    return <InfiniteScrollCarousel type='video' initialPosts={videos} maxPosts={maxPosts} />
  }
}