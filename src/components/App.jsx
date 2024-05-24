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
import FilterBySpecies from "./FilterBySpecies";
import Reset from "./Reset";


function App() {

  const [listCharacters, setListCharacter] = useState([]) //es un array porque es un listado
  const [filterName, setFilterName] = useState("")
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSpecies, setFilterSpecies] = useState("all");
 

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
  .filter((character)=> {
    if (filterSpecies === "all"){
      return true
    }else if (filterSpecies === "human"){
      return character.specie === "Human";
    }else if (filterSpecies === "alien"){
      return character.specie === "Alien";
    }

  })
  .sort((a, b) => a.name.localeCompare(b.name));//.sort metodo que ordena elementos. A y B son los parametros que le voy a dar al atributo name

  console.log(filterStatus)
 
  console.log(filterSpecies)

const {pathname} = useLocation() //cojo con destructuring la propiedad que quiero. Pathname me da la ruta del id del personaje
console.log(pathname);
const characterRoute = matchPath("/detail/:id", pathname) //funcion que me compara las rutas. Recibe dos parametros, la ruta que quiero buscar y en la que estoy guardado en pathname
console.log(characterRoute);
const characterIdUrl = characterRoute ? characterRoute.params.id : null;
//const characterIdUrl = characterRoute.params.id;
//cuando la ruta coincida dame el id del personaje y sino dame null


    const characterId = parseInt(characterIdUrl, 10);
    const detail = listCharacters.find(character => character.id === characterId);
  //busca en la lista de personajes el id que coincida con el id de la url donde estoy
  console.log(characterIdUrl)
 

 

  return (
    <>
     <Header/>
     <Routes >
        <Route path="/" 
        element={
            <main className="main"> 
              <form className="form">
                <FilterByName 
                inputChange={inputChange} 
                value={filterName}/>

                <FilterByStatus 
                setFilterStatus={setFilterStatus} 
                filterStatus={filterStatus} />

                <FilterBySpecies 
                setFilterSpecies={setFilterSpecies} 
                filterSpecies={filterSpecies} />

                <Reset setFilterName={setFilterName} setFilterStatus={setFilterStatus} setFilterSpecies={setFilterSpecies} />

              </form>

               
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
