import Cards from "./Cards"

function CharacterList({listCharacters}) {

  const html = listCharacters.map((character)=> <Cards key={character.id} info={character}/>)


  return (
    
    <div className="character-list">
        {html}
    </div>
  )
}

export default CharacterList