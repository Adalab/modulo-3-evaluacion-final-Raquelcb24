import { Link } from "react-router-dom"

function Cards({info}) {
  return (
    <section className="section">
        <article className="cards">
          <Link className="links" to={`/detail/${info.id}`}>
          <img className="img" src={info.image} alt="Character image" />
          <div className="text-cards">
            <h3>{info.name}</h3>
            <p>{info.specie}</p>
          </div>
          </Link>
          
        </article> 
    </section>
   
  )
}

export default Cards