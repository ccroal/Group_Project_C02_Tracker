const Results = require('./models/results.js');
const FormView = require('./views/form_view.js');
const GridView = require('./views/grid_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');







const results = new Results()
results.bindEvents()
results.all()
})

