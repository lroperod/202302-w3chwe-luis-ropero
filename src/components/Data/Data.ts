import type { PokemonStructure } from "../types.js";

export const getPokemonId = (id: number) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(async response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
};
