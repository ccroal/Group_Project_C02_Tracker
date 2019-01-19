const assert = require('assert');
const Calculate = require('../models/calculate.js');

 describe('Calculate', function() {

  let formInput;
  let result;

  beforeEach(function() {
     formInput = {
      car: 40,
      bus: 50,
      train: 30,
      plane: 2000,
      foodWaste: 'omnivore',
      plasticWaste: 30,
      energy: 150,
    }

    result = new Calculate()

  })

  it('should calculate car travel', function(){
    const actual = result.calculateCar(formInput.car);
    assert.strictEqual(actual, 851);
  });

  it('should calculate bus travel', function(){
    const actual = result.calculateBus(formInput.bus);
    assert.strictEqual(actual, 491);
  });

  it('should calculate train travel', function(){
    const actual = result.calculateTrain(formInput.train);
    assert.strictEqual(actual, 137);
  });

  it('should calculate transport', function(){
    const actual = result.calculateTransport(formInput.car, formInput.bus, formInput.train);
    assert.strictEqual(actual, 1479);
  })

  it('should calculate air travel', function(){
    const actual = result.calculateAirTravel(formInput.plane);
    assert.strictEqual(actual, 3119);
  })

  it('should calculate food waste vegan', function(){
    const actual = result.calculateFood('vegan');
    assert.strictEqual(actual, 738);
  })

  it('should calculate food waste vegetarian', function(){
    const actual = result.calculateFood('vegetarian');
    assert.strictEqual(actual, 1247);
  })

  it('should calculate food waste omnivore', function(){
    const actual = result.calculateFood('omnivore');
    assert.strictEqual(actual, 2513);
  })

  it('should calculate food waste heavy', function(){
    const actual = result.calculateFood('heavy meat eater');
    assert.strictEqual(actual, 2898)
  })

  it('should calculate energy use', function(){
    const actual = result.calculateEnergy(formInput.energy)
    assert.strictEqual(actual, 638)
  })

  // it('should calculate total CO2', function(){
  //   const actual = result.calculateTotal()
  // })

})
