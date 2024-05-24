

function FilterByName({inputChange, value}) {
  const handleKeyDown =(event)=>{
    if(event.key === "Enter"){
      event.preventDefault();
    }
  }
    
  return (
    <div className="form">
       
        <input className="input" type="text" 
        name="name"
        id="name"
        placeholder="Search by name"
        value={value}
        onChange={inputChange}
        onKeyDown={handleKeyDown}
        />
    </div>
  )
}

export default FilterByName