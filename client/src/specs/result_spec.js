const assert = require('assert');
const Result = require('../models/result.js');

 describe('Result', function() {

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

    result = new Result()

  })

  it('should calculate car travel', function(){
    const actual = result.calculateCar(formInput.car)
    assert.strictEqual(actual, 851)
  });

  it('should calculate bus travel', function(){
    const actual = result.calculateBus(formInput.bus);
    assert.strictEqual(actual, 491)
  });

  // it('should calculate transport' function(){
  //   const actual = result.transport;
  //   assert.strictEqual(actual, 1479)

})
