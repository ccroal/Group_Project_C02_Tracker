
const Result = function(){
  this.transport = 0,
  this.food = 0,
  this.airTravel = 0,
  this.plastic = 0,
  this.power = 0
}

Result.prototype.calculateCar = function(miles){
  const car = miles * 0.40935 * 52
  return Math.round(car)
}

Result.prototype.calculateBus = function(miles){
  const bus = miles * 0.18891 * 52
  return Math.round(bus)
}

module.exports = Result;
