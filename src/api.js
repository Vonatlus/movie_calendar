const BASE_URL = 'https://api.tvmaze.com/schedule?country=US&date=';

export const movieFromServer = (endpoint) => {
  return fetch(BASE_URL + endpoint)
    .then(response => response.json())
    .catch(error => document.write(error))
}

