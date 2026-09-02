import { useState } from 'react'

const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

  const newProject = {
      id: Date.now(),
      title: title,
      description: description
    }
    onAddProject(newProject)
    setTitle("")
    setDescription("")
  }

  return (
    <div className='border-2 border-black rounded-lg m-4 p-6'>
      <h2 className='text-lg font-bold mb-2'>Add project</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <label>
          Title
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}
          className='bg-white border border-black rounded-md h-10 w-full px-2'/>
        </label>

       
    
        <label>
          Description
          <textarea value={description} onChange={(event) => setDescription(event.target.value)}
          className='bg-white border text-left border-black rounded-md resize-none w-full px-2 py-1'/>
        </label>

        <button type="submit" className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold rounded-md px-3 py-2 w-full">Add</button>
      </form>
    </div>
  )
}

export default ProjectForm