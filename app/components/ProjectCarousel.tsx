import Project from "./Project"
// import prisma from '@/lib/prisma'

// async function getProjects() {
//     const videos = await prisma.project.findMany({
//       orderBy: {
//         createdAt: 'desc'
//       },
//       take: 5
//     })
//     return videos
// }

export default async function ProjectCarousel() {

  const projects = [1, 2]//, 3, 4, 5, 6, 7]

  return (
    <ul className="flex flex-col gap-4">
      {projects.map((project, i) => {
        return (
          <li key={i}>
            <Project />
          </li>
        )
      })}
    </ul>
  )
}