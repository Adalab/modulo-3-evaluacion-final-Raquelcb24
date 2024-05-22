

function FilterByName({inputChange}) {
    
  return (
    <form className="form">
        <label className="label" htmlFor="name">Busca tu personaje favorito</label>
        <input className="input" type="text" 
        name="name"
        id="name"
        placeholder="Nombre del personaje"
        onChange={inputChange}
        />
    </form>
  )
}

export default FilterByName