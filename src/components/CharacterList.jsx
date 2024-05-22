import Cards from "./Cards"

function CharacterList({listCharacters}) {

  const html = listCharacters.map((character)=> <Cards key={character.id} info={character}/>)


  return (
    
    <div>
        {html}
    </div>
  )
}

export default CharacterList