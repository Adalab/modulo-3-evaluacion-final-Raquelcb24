

function CharacterDetail() {
  return (
    <article>
        <img className="img" src={info.image} alt="Character image" />
        <h3>{info.name}</h3>
        <p>Status: {info.status}</p>
        <p>Species: {info.specie}</p>
        <p>Origin: {info.origin}</p>
        <p>Episodes: {info.episode}</p>

  </article>
  )
}

export default CharacterDetail