import React from 'react'
import Post from './Post'
import { countPosts, getPhotos, getVideos } from '../posts/actions'
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
    postClassName = 'min-w-[23rem] h-[14rem] xs:max-w-[30rem] xs:h-[17rem]'
  }

  if (onHomePage) {
    return (
      <ul className='flex gap-5 pb-2 overflow-x-scroll custom-scrollbar'>
        {posts.map((post, i) => {
          return (
            <li key={i}>
              <Post
                post={post}
                className={`${postClassName}`}
                location={'homePage'}
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