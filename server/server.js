const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');

const publicPath = path.join(_dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mondgodb://localhost:27017')
.then((client) => {
  const db = client.db('calculator_hub');
  const calculatorCollection = db.collection('calculator');
  const calcRouter = createRouter(calculatorCollection);
  app.use('/api/calculator', calcRouter);
})
.catch(console.error);

app.listen(3000, function () => {
console.log(`Listening on port ${this.address().port}`);
});
