const Pokemon = require('./pokemon')
const fetchPokemon = require('./api')

class Pokedex {
  constructor(){
    this.allPokemons = []
  }
  catch(pokemon){
    return fetchPokemon(pokemon)
      .then((data)=> this.allPokemons.push(data))
  }

  allCatchs(){
    return this.allPokemons.map((pokemon => pokemon.getName()))
  }
}

module.exports = Pokedex;