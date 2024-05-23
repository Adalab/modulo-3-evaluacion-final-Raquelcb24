import { Link } from "react-router-dom"


function CharacterDetail({detail}) {

  return ( detail ? 
        <section >
           <Link to="/"><button className="button">Volver</button></Link>
            <article className="filtered">
                <img className="filtered__img" src={detail.image} alt="Character image" />
                <div className="filtered__text-cards">
                    <h3>{detail.name}</h3>
                    <p>Status: {detail.status}</p>
                    <p>Species: {detail.specie}</p>
                    <p>Origin: {detail.origin}</p>
                    <p>Episodes: {detail.episode}</p> 
                </div> 
            </article>
        </section>
         : <p className="not-found">Personaje no encontrado</p>
        
       
  )
}

export default CharacterDetail