

function FilterByName({inputChange}) {
    
  return (
    <form>
        <label htmlFor="name">Busca tu personaje favorito</label>
        <input type="text" 
        name="name"
        id="name"
        placeholder="Nombre del personaje"
        onChange={inputChange}
        />
    </form>
  )
}

export default FilterByName