

function FilterByStatus({ setFilterStatus, filterStatus }) {
    const handleChange = (event) => {
      setFilterStatus(event.target.value);
    };
  
    return (
      <div className="select-container">
        <select className="select" name="status" id="status" onChange={handleChange} value={filterStatus}>
          <option value="all">Dead or alive</option>
          <option value="alive">Alive</option>
          <option value="dead"> Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    );
  }
  
  export default FilterByStatus;