
const Calculate = function(){

};

Calculate.prototype.calculateCar = function(miles){
  const car = miles * 0.40935 * 52
  return Math.round(car)
};

Calculate.prototype.calculateBus = function(miles){
  const bus = miles * 0.18891 * 52
  return Math.round(bus)
};

Calculate.prototype.calculateTrain = function(miles){
  const train = miles * 0.08761 * 52
  return Math.round(train)
};

Calculate.prototype.calculateAirTravel = function (miles) {
  const airTravel = (miles/12) / 0.62137 * 1.09 * 0.20515 * 52
  return Math.round(airTravel)
};

Calculate.prototype.calculateTransport = function(car, bus, train){
  const carTravel = this.calculateCar(car);
  const busTravel = this.calculateBus(bus);
  const trainTravel = this.calculateTrain(train);
  const transport = carTravel + busTravel + trainTravel
  return transport
};

Calculate.prototype.calculateFood = function(foodWaste){
  if (foodWaste === 'vegan'){
    return 738
  } else if  (foodWaste === 'vegetarian'){
    return 1247
  } else if (foodWaste === 'omnivore'){
    return 2513
  } else if (foodWaste === 'heavy meat eater'){
    return 2898
  };
};

Calculate.prototype.calculateEnergy = function(kwh){
  const energy = kwh * 0.354224 * 12;
  return Math.round(energy);
};

module.exports = Calculate;
