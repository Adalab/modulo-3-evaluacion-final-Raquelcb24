

function FilterByName({inputChange, value}) {
  const handleKeyDown =(event)=>{
    if(event.key === "Enter"){
      event.preventDefault();
    }
  }
    
  return (
    <form className="form">
        <label className="label" htmlFor="name">Busca tu personaje favorito</label>
        <input className="input" type="text" 
        name="name"
        id="name"
        placeholder="Nombre del personaje"
        value={value}
        onChange={inputChange}
        onKeyDown={handleKeyDown}
        />
    </form>
  )
}

export default FilterByName