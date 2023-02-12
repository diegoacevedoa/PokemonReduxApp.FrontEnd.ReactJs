import { getpokemons } from "../../../../application/pokemon/pokemon";
import { loadPokemons } from "./pokemonSlice";

export const startLoadingPokemons = (page, take) => {
  return async (dispatch) => {
    //Realizamos consulta del Api
    const resp = await getpokemons(page, take);

    dispatch(
      loadPokemons({ page, take, count: resp.count, pokemons: resp.results })
    );
  };
};
