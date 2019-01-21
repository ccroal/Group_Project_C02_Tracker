const Results = require('./models/results.js');
const FormView = require('./views/form_view.js');
const GridView = require('./views/grid_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const formDiv = document.querySelector('div#form');
const form = new FormView(formDiv);
form.rendForm();
form.setupEventListeners();


const results = new Results();
results.setupEventsListener();
results.all();
});
