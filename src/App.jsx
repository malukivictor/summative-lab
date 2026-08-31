import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'

function App() {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState("")

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject])
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='border-2 border-black rounded-lg m-4'>
      <Header />
      <ProjectForm onAddProject={handleAddProject} />
      <SearchBar searchBar={search} onSearchChange={handleSearchChange} />
      <ProjectList projects={filteredProjects} />
    </div>
  )
}

export default App