import { configureStore } from "@reduxjs/toolkit";
import PokemonReducer from "../features/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: PokemonReducer,
  },
});
