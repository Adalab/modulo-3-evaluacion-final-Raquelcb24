const getDataFromApi = ()=>{
    return fetch ('https://rickandmortyapi.com/api/character')
    .then((response)=> response.json())
    .then((data)=>{
        const arrayData = data.results.map((user)=>{
            //solo quiero los datos recogidos en results y hago un map porque es un array de objetos. Los obtengo aqui y le pido que me retorne los datos que voy a necesitar
         
            return {
                id: user.id,
                name: user.name,
                status: user.status,
                specie: user.species,
                origin: user.origin.name,
                image: user.image,
                episode: user.episode,
                //cojo todos los elementos que voy a necesitar sacar
            };
        });
        return arrayData;
    });

    //https://rickandmortyapi.com/api/character URL que debo usar
    //https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-ymorty.json //Usar cuando no funcione
}

export default getDataFromApi;