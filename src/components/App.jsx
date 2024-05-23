import "../styles/App.scss";
import "../styles/_variables.scss";
import getDataFromApi from "../services/api";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";

import { Route, Routes, matchPath, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import FilterByStatus from "./FilterByStatus";
import Header from "./Header";


function App() {

  const [listCharacters, setListCharacter] = useState([]) //es un array porque es un listado
  const [filterName, setFilterName] = useState("")
  const [filterStatus, setFilterStatus] = useState("all");
 

  useEffect(()=>{ //ejecuto mi funcion donde hago fetch y modifico mi variable de estado con esos datos de la api
    getDataFromApi().then((arrayData)=>{
      setListCharacter(arrayData)
    
    })
  }, [])


  const inputChange = (event) => {
    const search = event.target.value.toLowerCase()
    setFilterName(search)
  };

  const filteredCharacters = listCharacters
  .filter((item)=>item.name.toLowerCase().includes(filterName))
  .filter((character)=> {

    if (filterStatus === "all"){
      return true
    }else if (filterStatus === "alive"){
      return character.status === "Alive";
    }else if (filterStatus === "dead"){
      return character.status === "Dead";
    }else if (filterStatus === "unknown"){
      return character.status === "unknown";
    }

  })
console.log(filterStatus)

const {pathname} = useLocation() //cojo con destructuring la propiedad que quiero. Pathname me da la ruta del id del personaje
console.log("Pathname:", pathname);
const characterRoute = matchPath("/detail/:id", pathname) //funcion que me compara las rutas. Recibe dos parametros, la ruta que quiero buscar y en la que estoy guardado en pathname
console.log("Character Route:", characterRoute);
const characterIdUrl = characterRoute ? characterRoute.params.id : null;

//cuando la ruta coincida dame el id del personaje y sino dame null


    const characterId = parseInt(characterIdUrl, 10);
    const detail = listCharacters.find(character => character.id === characterId);
  //busca en la lista de personajes el id que coincida con el id de la url donde estoy
  console.log("Character ID URL:", characterIdUrl)
 

 

  return (
    <>
     <Header/>
     <Routes>
        <Route path="/" 
        element={
            <main className="main">             
                <FilterByName 
                inputChange={inputChange} 
                value={filterName}/>
                <FilterByStatus 
                setFilterStatus={setFilterStatus} 
                filterStatus={filterStatus} />
                {filteredCharacters.length === 0 ? (
                <p className="not-found">
                  No hay ninguna coincidencia con {filterName}
                  </p>
                ) : ( 
                <CharacterList listCharacters={filteredCharacters}/>)}
            </main>
          }
          />
          <Route 
          path="/detail/:id" element={<CharacterDetail detail={detail}/>} />
          <Route path="*" element={<h2 className="not-found"> Pagina no encontrada</h2>} />

      </Routes>
      
      
    </>
  )
}

export default App
