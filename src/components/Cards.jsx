
function Cards({info}) {
  return (
    <article>
      <img className="img" src={info.image} alt="Character image" />
      <p>{info.name}</p>
      <p>{info.specie}</p>
    </article> 
  )
}

export default Cards