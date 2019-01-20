const Results = require('./models/results.js');
const FormView = require('./views/form_view.js');
const GridView = require('./views/grid_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


const formContainer = document.querySelector('div#form')
const formView = new FormView(formContainer);
formView.rendForm();
formView.setupEventListeners()



// const container = document.querySelector('div#Co2-Info');
// const gridView = new GridView(container);
// gridView.bindEvents();


const results = new Results();
results.all();
})
