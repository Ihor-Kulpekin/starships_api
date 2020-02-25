const getData = async (url) => {
  const response = await fetch(url);
  return await response.json()
};

export const getStarships = async (search) => {
  let url = 'https://swapi.co/api/starships';

  if (search) {
    url += '?search=' + encodeURIComponent(search)
  }

  return await getData(url);
};

export const changePage = async (value) => {
  return await getData(value);
};

export const getDetailsStarship = (starshipId) => {
  return getData('https://swapi.co/api/starships/' + starshipId)
};