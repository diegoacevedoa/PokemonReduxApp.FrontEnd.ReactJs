export const getpokemons = async (page, take) => {
  //   const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${take}&offset=${page * take}`
  );
  const data = resp.json();

  return data;
};
