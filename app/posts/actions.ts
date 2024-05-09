'use server'

import prisma from "@/lib/prisma"

export async function getPhotos(page?: number) {

  if (page) {
    return await prisma.post.findMany({
      where: {
        type: 'photo'
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip: page * 9,
      take: 9
    })
  } else {
    return await prisma.post.findMany({
      where: {
        type: 'photo'
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 9
    })
  }
}

export async function getVideos(page?: number) {

  if (page) {
    return await prisma.post.findMany({
      where: {
        type: 'video'
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip: page * 4,
      take: 4
    })
  } else {
    return await prisma.post.findMany({
      where: {
        type: 'video'
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 4
    })
  }
}

export async function countPosts(type: string) {
  if (type === 'photo') {
    return prisma.post.count({
      where: {
        type: 'photo'
      }
    })
  } else {
    return prisma.post.count({
      where: {
        type: 'video'
      }
    })
  }
}