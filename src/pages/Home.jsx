import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../features/pokemon/pokemonSlice';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const { pokemons, status, error, filter } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const filteredPokemons = pokemons.filter(p => p.name.includes(filter));

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <SearchBar />
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
        {filteredPokemons.map((p) => (
          <PokemonCard key={p.name} name={p.name} url={p.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
