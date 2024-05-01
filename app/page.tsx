import prisma from "@/lib/prisma";
import Image from "next/image";


async function getPosts() {
  const posts = await prisma.post.findMany()
  return posts
}

export default async function Home() {
  // const posts = await getPosts()
  // console.log('POSTS', {posts})
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        HERE IS MY APP
      </div>
    </main>
  );
}
