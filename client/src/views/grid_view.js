const PubSub = require('../helpers/pub_sub.js');
const SummaryView = require('./summary_view.js');

const GridView = function (container){
  this.container = container;
};

GridView.prototype.bindEvents = function () {
    PubSub.subscribe('ResultsModel:all-results', (event) => {
      this.render(event.detail);
      console.log(event.detail);
    });
}

GridView.prototype.resultSelectedButton = function (resultId) {
  const button = document.createElement('button');
  button.classList.add('selected-button')
  button.value = resultId;

  button.addEventListener('click', (event) => {
    PubSub.publish('GridView:result-selected', event.target.value);
  })

  return button;
}

GridView.prototype.render = function (results){
  this.container.innerHTML = '';
  const summaryView = new SummaryView(this.container);
  results.forEach((result) => summaryView.render(result));
};

GridView.prototype.createDeleteButton = function (resultId){
  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.value = resultId;

  button.addEventListener('click', (event) => {
    PubSub.publish('GridView:result-delete-clicked', event.target.value);
  })

  return button;
};


module.exports = GridView;
