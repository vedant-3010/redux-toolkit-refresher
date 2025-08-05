import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemons } from "./pokemonAPI";

export const getPokemons = createAsyncThunk("pokemon/getPokemons", async () => {
  const response = await fetchPokemons();
  return response;
});

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
        filter: "", 
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPokemons.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(getPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload;
            state.status = "succeeded";
        });
        builder.addCase(getPokemons.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    },
});

export const { setFilter } = pokemonSlice.actions;
export default pokemonSlice.reducer;