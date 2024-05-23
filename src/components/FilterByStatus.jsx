function FilterByStatus({ setFilterStatus }) {
    const handleChange = (event) => {
      setFilterStatus(event.target.value);
    };
  
    return (
      <div>
        <select name="status" id="status" onChange={handleChange}>
          <option value="all">Todos</option>
          <option value="alive">Vivo</option>
          <option value="dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
    );
  }
  
  export default FilterByStatus;