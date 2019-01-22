const Results = require('./models/results.js');
const FormView = require('./views/form_view.js');
const GridView = require('./views/grid_view.js');
const CanvasView = require('./views/canvas_view.js')
const SingleView = require('./views/single_result_view.js');


document.addEventListener('DOMContentLoaded', () => {
console.log('JavaScript Loaded');
const canvasView = new CanvasView();
canvasView.render();

const gridView = document.querySelector('div#gridView');
const grid = new GridView (gridView)
grid.bindEvents()

const singleView = new SingleView(gridView);
singleView.bindEvents()

const results = new Results()
results.setupEventsListener()
results.all();

const formDiv = document.querySelector('div#form');
const form = new FormView(formDiv);
form.rendForm();
form.setupEventListeners();
});
