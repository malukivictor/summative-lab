

const SearchBar = ({ searchBar, onSearchChange }) => {
  return (
    <div>
        <input type = "text" placeholder="Search Here" value={searchBar} onChange={onSearchChange} 
        className="bg-green-100 border "/>
    </div>
  )
}
export default SearchBar