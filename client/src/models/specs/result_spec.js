const assert = require('assert');
const Calculation = require('../Calculation.js');
const Result = require('Result');

describe('Calculation', function(){;

  beforeEach(function{
    const formInput = {
      car: 40,
      bus: 50,
      train: 30,
      plane: 2000,
      foodWaste: 'omnivore',
      plasticWaste: 30,
      energy: 150,
    }

    const result = {
      transport: 1479,
      food: 2513,
      airTravel: 0,
      plastic: 694,
      power: 638,
    }
  })

  it('should calculate transport' function(){
    const actual = result.transport;
    assert.strictEqual(actual, 1479)
  })


}
