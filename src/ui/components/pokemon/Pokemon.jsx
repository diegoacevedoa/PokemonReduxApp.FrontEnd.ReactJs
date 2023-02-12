import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingPokemons } from "../../store/slices/pokemon";
import PokemonList from "./PokemonList";

const Pokemon = () => {
  const dispatch = useDispatch();
  const { page, take, count, list } = useSelector((state) => state.pokemons);

  useEffect(() => {
    handleConsultar();
  }, []);

  const handleConsultar = (newPage = page) => {
    dispatch(startLoadingPokemons(newPage, take));
  };

  return (
    <div>
      <h1>Pokemon</h1>
      <br />
      <PokemonList count={count} list={list} />
      <br />
      <Button onClick={() => handleConsultar(page - 1)}>Previous</Button>{" "}
      <Button onClick={() => handleConsultar(page + 1)}>Next</Button>
    </div>
  );
};

export default Pokemon;
