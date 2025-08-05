import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/pokemon/pokemonSlice';

const SearchBar = () => {
  
    const dispatch = useDispatch();

    const handleChange = (e) => {
      dispatch(setFilter(e.target.value.toLowerCase()));
    }

  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      onChange={handleChange}
      className="p-2 border rounded w-full mb-4"
    />
  );
};

export default SearchBar;
