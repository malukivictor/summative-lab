import ProjectCard from './ProjectCard'

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <p className='m-4'>No projects found, please try again.</p>
  }

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList