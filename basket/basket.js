class ShoppingBasket{
  constructor(){
    this.items = []
    this.total = 0.0
    this.discount = 0
  }

  addItem(item){
    this.items.push(item.getName())
    this.total+=item.getPrice()
  }

  getItems(){
    return this.items

  }
 
  applyDiscount(discount) {
    this.discount = discount/100
  }

  getTotal(){
    var totalBasket = this.total
    return totalBasket - (totalBasket * this.discount)
  }

}

module.exports = ShoppingBasket;
