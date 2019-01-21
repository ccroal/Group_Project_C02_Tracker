use calculator_hub;
db.dropDatabase();

db.calculator.insertMany([
  {
    transport: 2340,
    airTravel: 4000,
    food: 2090,
    plastic: 689,
    power: 458,
    total: 9577
  },

  {
    transport: 3750,
    airTravel: 2756,
    food: 3000,
    plastic: 500,
    power: 900,
    total: 10906
  },

  {
    transport: 4750,
    airTravel: 1000,
    food: 2000,
    plastic: 450,
    power: 780,
    total: 8980
  },

  {
  transport: 5000,
  airTravel: 2000,
  food: 2158,
  plastic: 600,
  power: 900,
  total: 10658
  }

]);
