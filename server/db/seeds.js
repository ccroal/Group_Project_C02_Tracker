use calculator_hub;
db.dropDatabase();

db.calculator.insertMany([
  {
    transport: {
      car: 150,
      bus: 0,
      train: 0
    },
    air: 2000,
    food: "Meat",
    plastic: 19,
    gas: 75,
    electric: 100
  },
  {
    transport: {
      car: 80,
      bus: 15,
      train: 0
    },
    air: 12000,
    food: "Vegan",
    plastic: 10,
    gas: 150,
    electric: 420
  },
  {
    transport: {
      car: 0,
      bus: 5,
      train: 100
    },
    air: 60000,
    food: "Omnibore",
    plastic: 52,
    gas: 50,
    electric: 90
  }
]);
