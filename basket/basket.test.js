const ShoppingBasket = require('./basket')

describe ('shoppingBasket class', () =>{
  it ('should return the price of 1 item added in the basket', () => {
  
  const shopping = new ShoppingBasket();

  const doubleCandy = {
    getName: () => 'Mars',
    getPrice: () => 4.99
  }

  shopping.addItem(doubleCandy)

  expect(shopping.getTotal()).toBe(4.99);
  });

  it ('should return the price of 2 items added in the basket', () => {
  
    const shopping = new ShoppingBasket();
  
    const doubleCandy = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    }
    const doubleCandy2 = {
      getName: () => 'Sniker',
      getPrice: () => 2.00,
    }
  
    shopping.addItem(doubleCandy)
    shopping.addItem(doubleCandy2)
  
    expect(shopping.getTotal()).toBe(6.99);
    });

    

    it ('should return the items with discount', () => {
  
      const shopping = new ShoppingBasket();
    
      const doubleCandy = {
        getName: () => 'Mars',
        getPrice: () => 4.00
      }
      const doubleCandy2 = {
        getName: () => 'Sniker',
        getPrice: () => 1.00,
      }
    
      shopping.addItem(doubleCandy)
      shopping.addItem(doubleCandy2)
      shopping.applyDiscount(10)
    
      expect(shopping.getTotal()).toBe(4.5);
      });
});
