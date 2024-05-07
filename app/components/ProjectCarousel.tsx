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

export default async function ProjectCarousel(props:{
  location: 'projectsPage' | 'homePage'
}) {

  const { location } = props

  const projects = [1, 2, 3, 4, 5]//, 6, 7]

  let ulClassName
  if (location === 'projectsPage') {
    ulClassName = 'flex-col gap-5'
  } else {
    ulClassName = 'flex-row gap-5 overflow-x-auto custom-scrollbar pb-2'
  }

  return (
    <ul className={`flex ${ulClassName} gap-4`}>
      {projects.map((project, i) => {
        return (
          <li key={i}>
            <Project location={location} />
          </li>
        )
      })}
    </ul>
  )
}