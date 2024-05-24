
function FilterBySpecies({filterSpecies, setFilterSpecies}) {
    const handleChange = (event) => {
        setFilterSpecies(event.target.value);
      };

  return (
    <div className="select-container">
        <select className="select" name="species" id="species" onChange={handleChange} value={filterSpecies}>
            <option value="all">Human or Alien</option>
            <option value="human">Human</option>
            <option value="alien"> Alien</option>
        
        </select>
  </div>
  )
}

export default FilterBySpecies