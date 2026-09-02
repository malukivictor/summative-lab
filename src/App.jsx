import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'

const initialProjects = [
  {
    id: 1,
    title: 'Plantsy',
    description: 'A React hooks plant shop admin app - add plants, mark them sold out, and search inventory, backed by a JSON server API.',
    url: 'https://github.com/malukivictor/react-hooks-plantshop-cr-vite',
  },
  {
    id: 2,
    title: 'Calculator',
    description: 'A basic calculator app for performing everyday arithmetic operations.',
    url: 'https://github.com/malukivictor/calculator',
  },
]

function App() {
  const [projects, setProjects] = useState(initialProjects)
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