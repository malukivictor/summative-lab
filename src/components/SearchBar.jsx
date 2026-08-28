

const SearchBar = ({ searchBar, onSearchChange }) => {
  return (
    <div>
        <input type = "text" placeholder="Search Here" value={searchBar} onChange={onSearchChange} />
    </div>
  )
}
export default SearchBar