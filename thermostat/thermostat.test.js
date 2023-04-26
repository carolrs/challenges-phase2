const Thermostat = require('./thermostat')

test('it returns the new tempeture when up', ()=>{
  const temp = new Thermostat()

  expect(temp.getTempeture()).toBe(20)

  temp.up()
  temp.up()
  expect(temp.getTempeture()).toBe(22)
})

test('it returns the new tempeture when down', ()=>{
  const temp = new Thermostat()

  expect(temp.getTempeture()).toBe(20)

  temp.up()
  temp.up()
  temp.down()
  
  expect(temp.getTempeture()).toBe(21)
})

test('it returns the maximum tempeture when power saving mode is on', ()=>{
  const temp = new Thermostat()

  temp.setPowerSavingMode(true)
  for (let i = 0 ; i < 10 ; i++) {
    temp.up();
  }
  expect(temp.getTempeture()).toBe(25)
})

test('it returns the maximum tempeture when power saving mode is off', ()=>{
  const temp = new Thermostat()

  temp.setPowerSavingMode(false)
  for (let i = 0 ; i < 6 ; i++) {
    temp.up();
  }
  expect(temp.getTempeture()).toBe(26)
})

test('it returns the minimum tempeture', ()=>{
  const temp = new Thermostat()

  for (let i = 0 ; i < 20 ; i++) {
    temp.down();
  }
  expect(temp.getTempeture()).toBe(10)
})

test('it reset tempeture', ()=>{
  const temp = new Thermostat()
  temp.up()
  temp.up()

  expect(temp.getTempeture()).toBe(22)

  temp.reset()
  expect(temp.getTempeture()).toBe(20)
})

test('it returns low for energyUsage', ()=>{
  const temp = new Thermostat()

  for (let i = 0 ; i < 3 ; i++) {
    temp.down();
  }

  expect(temp.energyUsage()).toEqual('low')
})

test('it returns  high for energyUsage', ()=>{
  const temp = new Thermostat()
  temp.setPowerSavingMode(false)
  for (let i = 0 ; i < 10 ; i++) {
    temp.up();
  }

  expect(temp.energyUsage()).toEqual('high')
})

test('it returns medium for energyUsage', ()=>{
  const temp = new Thermostat()

  for (let i = 0 ; i < 10 ; i++) {
    temp.up();
  }

  expect(temp.energyUsage()).toEqual('medium')
})




