class Pokemon{
  constructor(name, id, height, weight, types){
    this.name = name
    this.id = id
    this.height = height
    this.weight = weight
    this.types = types
  }
  getName(){
    return this.name
  }
  getId(){
    return this.id
  }
  getHeight(){
    return this.height
  }
  getWeight(){
    return this.weight
  }
  getTypes(){
    return this.types
  }

}
module.exports = Pokemon;