const FormView = require('./views/form_view.js');
// const GridView = require('./views/grid_view.js');
const Calculator = require('./models/calculate.js');
const Results = require('./models/results.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const form = document.querySelector('#new-calculator');
  form.addEventListener('click', function() {
    const formView = new FormView();
    console.log('working', formView);
    formView.setupEventListeners();

const results = document.querySelector('#results');
  results.addEventListener('click', function() {
    const gridContainer = document.querySelector('div#Co2-Info');
    const gridView = new GridView(gridContainer);
    console.log('working', gridView);
    gridView.bindEvents();
  })

})

});
