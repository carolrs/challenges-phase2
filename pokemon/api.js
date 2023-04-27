const Pokemon = require('./pokemon')

const fetchPokemon = (pokemon) => {
  return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
  .then((response) => response.json())
  .then((data)=> {
    return new Pokemon(data.name, data.id, data.height, data.weight, data.types)
  })
};

module.exports = fetchPokemon;