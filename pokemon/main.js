const Pokedex = require('./pokedex.js')

const myDex = new Pokedex()

myDex.catch('charmander')
myDex.catch('pikachu')
setTimeout(() => {
  const myLista = myDex.allCatchs()
console.log(myLista)
}, 5000)

