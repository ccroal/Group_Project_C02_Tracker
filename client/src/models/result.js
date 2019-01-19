
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

Result.prototype.calculateTrain = function(miles){
  const train = miles * 0.08761 * 52
  return Math.round(train)
}

Result.prototype.calculateTransport = function(car, bus, train){
  const carTravel = this.calculateCar(car);
  const busTravel = this.calculateBus(bus);
  const trainTravel = this.calculateTrain(train);
  const transport = carTravel + busTravel + trainTravel
  return transport
}

Result.prototype.calculateFood = function(foodWaste){
  if (foodWaste === 'vegan'){
    return 738
  } else if  (foodWaste === 'vegetarian'){
    return 1247
  } else if (foodWaste === 'omnivore'){
    return 2513
  } else if (foodWaste === 'heavy meat eater'){
    return 2898
  };

}

module.exports = Result;
