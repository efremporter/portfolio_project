import prisma from "@/lib/prisma";
import Image from "next/image";


async function getPosts() {
  const posts = await prisma.post.findFirst()
  return posts
}

export default async function Home() {
  const post = await getPosts()
  const src = post?.filePath ?? ''
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        HERE IS MY APP
      </div>
      <Image alt={'img'} src={src} width={200} height={200} />
    </main>
  );
}
