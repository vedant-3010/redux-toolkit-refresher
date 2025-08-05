import axios from 'axios';

export const fetchPokemons = async () => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
  return res.data.results;
};
    