
function Cards({info}) {
  return (
    <section className="section">
        <article className="cards">
          <img className="img" src={info.image} alt="Character image" />
          <div className="text-cards">
            <h3>{info.name}</h3>
            <p>{info.specie}</p>
          </div>
        </article> 
    </section>
   
  )
}

export default Cards