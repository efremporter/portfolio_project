import Project from "./Project"
import prisma from '@/lib/prisma'

async function getProjects() {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 7
    })
    return projects
}

export default async function ProjectCarousel(props:{
  location: 'projectsPage' | 'homePage'
}) {

  const { location } = props

  const projects = await getProjects()

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
            <Project project={project} location={location} />
          </li>
        )
      })}
    </ul>
  )
}