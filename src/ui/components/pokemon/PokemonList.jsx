import PokemonCard from "./PokemonCard";

const PokemonList = ({ count, list }) => {
  return (
    <ul>
      {count > 0 &&
        list.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
    </ul>
  );
};

export default PokemonList;
