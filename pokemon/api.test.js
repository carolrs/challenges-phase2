const fetchPokemon = require('./api');


describe('fetchPokemon', () => {
  it('returns a promise of the useful pokemon data', (done) => {
    fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(6);
        done();
      });
  });
  
});

describe('fetchPokemon', () => {
  it('returns a promise of the useful pokemon data', (done) => {
    fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.weight).toEqual(905);
        done();
      });
  });
  
});

describe('fetchPokemon', () => {
  it('returns a promise of the useful pokemon data', (done) => {
    fetchPokemon('pikachu')
      .then((pokemon) => {
        console.log(pokemon)
        expect(pokemon.height).toEqual(4);
        done();
      });
  });
  
});

describe('fetchPokemon', () => {
  it('returns an error', (done) => {
    fetchPokemon('invalid')
      .catch( (error) => {
        expect(error).toBeDefined();
        //just checking if the error exists
        done();
      });
  }); 
});