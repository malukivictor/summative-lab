const ProjectCard = ({ project }) => {
  return (
    <div className='border-b border-black p-4'>
      <h3 className='font-bold'>{project.title}</h3>
      <p>{project.description}</p>
      {project.url && (
        <a href={project.url} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      )}
    </div>
  )
}

export default ProjectCard