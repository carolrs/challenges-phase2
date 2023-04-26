class Thermostat {
  constructor(){
    this.temp = 20
    this.powerSaving = true
  }
  up(){
    if((this.powerSaving && this.temp < 25) ||
    (!this.powerSaving && this.temp < 32)){
       this.temp++
    }
  }
  down(){
    if(this.temp > 10){this.temp--}

  }

  getTempeture(){
    return this.temp
  }

  setPowerSavingMode(i){
   this.powerSaving = i
  }  

  reset(){
    return this.temp = 20
  }

 energyUsage(){
  if(this.temp < 18){
    return 'low'
  }else if(this.temp <= 25){
    return 'medium'
  }else{
    return 'high'
  }
 }
}

module.exports = Thermostat;