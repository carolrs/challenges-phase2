const Candy = require('./candy')

test('it returns the name', ()=>{
  const candy = new Candy ('Mars', 4.99)
  expect(candy.getName()).toEqual('Mars')
})

test('it returns the price of a candt', ()=>{
  const candy = new Candy ('Mars', 4.99)
  expect(candy.getPrice()).toEqual(4.99)
})