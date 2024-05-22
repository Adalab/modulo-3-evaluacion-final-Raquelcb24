import "../styles/App.scss";
import getDataFromApi from "../services/api";
import { useEffect, useState } from "react";

import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";
import logo from '../images/title.png'

function App() {

  const [listCharacters, setListCharacter] = useState([]) //es un array porque es un listado
  const [filterName, setFilterName] = useState("")

  useEffect(()=>{
    getDataFromApi().then((arrayData)=>{
      setListCharacter(arrayData)
    })
  }, [])


  const inputChange = (event) => {
    const search = event.target.value.toLowerCase()
    setFilterName(search)
  };
  const filteredCharacters = listCharacters.filter((item)=>item.name.toLowerCase().includes(filterName)
);

  return (
    <>
      <header className="header">
        <img className="header__img" src={logo} alt="Logo Rick and Morty" />
      </header>

      <main className="main">
        <FilterByName inputChange={inputChange}/>
        <CharacterList listCharacters={filteredCharacters}/>

      </main>
      
    </>
  )
}

export default App
