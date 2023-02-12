import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  take: 10,
  count: 0,
  list: [],
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    loadPokemons: (state, action) => {
      state.page = action.payload.page;
      state.take = action.payload.take;
      state.count = action.payload.count;
      state.list = action.payload.pokemons;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadPokemons } = pokemonsSlice.actions;
