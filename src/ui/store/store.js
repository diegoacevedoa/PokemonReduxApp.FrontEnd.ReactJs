import { configureStore } from "@reduxjs/toolkit";
import { pokemonsSlice } from "./slices/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
  },
});
