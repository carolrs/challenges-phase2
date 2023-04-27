const Pokedex = require('./pokedex')

describe('Pokedex', () => {
  it('Can fetch the data for Jigglypuff', async () => {
    const pokedex = new Pokedex();
    await pokedex.catch('charmander')
    expect(pokedex.allCatchs()).toEqual(['charmander']);
  });
});

describe('Pokedex', () => {
  it('Shows a list of pokemons', async () => {
    const pokedex = new Pokedex();
    await pokedex.catch('charmander')
    await pokedex.catch('pikachu')
    expect(pokedex.allCatchs()).toEqual(['charmander', 'pikachu']);
  });
});

describe('Pokedex', () => {
  it('Shows a empty list when catch its not called', async () => {
    const pokedex = new Pokedex();
    
    expect(pokedex.allCatchs()).toEqual([]);
  });
});


describe('Pokedex', () => {
  it('Can fetch the data for Jigglypuff', (done) => {
    const pokedex = new Pokedex();
    pokedex.catch('charizard')
      .then(() => {
        expect(pokedex.allCatchs()).toEqual(['charizard']);
        done();
      });
  });
});

describe('Pokedex', () => {
  it('Catch pikachu to the pokedex', () => {
    const pokemonFake = {
      getName: () => 'pikachu'
    }
    const pokedex = new Pokedex();
    pokedex.catch(pokemonFake)
      
    expect(pokemonFake.getName()).toEqual('pikachu');
       
      });
  });