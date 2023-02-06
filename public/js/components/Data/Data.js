export const getPokemonId = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(async (response) => response.json())
        .then(result => {
        console.log(result);
    })
        .catch(error => {
        console.log(error);
    });
};
