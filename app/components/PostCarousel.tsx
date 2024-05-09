import React from 'react'
import Post from './Post'
import { countPosts, getPhotos, getVideos } from '../photos/actions'
import InfiniteScrollCarousel from './InfiniteScrollCarousel'

export default async function PostCarousel(props: {
  type: 'photo' | 'video'
  location: 'photosPage' | 'videosPage' | 'homePage'
}) {
  const { type } = props
  const onHomePage = props.location === 'homePage'

  let posts
  let maxPosts
  if (type === 'photo') {
    posts = await getPhotos()
    maxPosts = await countPosts('photo')
  } else {
    posts = await getVideos()
    maxPosts = await countPosts('video')
  }
  
  let postClassName
  if (type === 'photo') {
    postClassName = 'w-[14rem] h-[14rem]'
  } else {
    postClassName = 'min-w-[20rem] max-w-[30rem] h-auto max-h-[20rem] min-h-[14rem]'
  }

  if (onHomePage) {
    return (
      <ul className='flex gap-5 pb-2 overflow-x-auto custom-scrollbar'>
        {posts.map((post, i) => {
          return (
            <li key={i}>
              <Post
                post={post}
                className={`${postClassName}`}
              />
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <InfiniteScrollCarousel type={type} initialPosts={posts} maxPosts={maxPosts} />
    )
  }
}