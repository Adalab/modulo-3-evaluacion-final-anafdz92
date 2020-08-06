const getDataApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((item) => {
        return {
          // DATOS CHARACTERCARD
          image: item.image,
          name: item.name,
          species: item.species,

          // DATOS CHARACTERDETAIL
          status: item.status,
          location: item.location.name,
          episode: item.episode,

          //ID
          id: item.id,
        };
      });
    });
};

export default getDataApi;
