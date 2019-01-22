const RequestHelper = require('../helpers/request_helper.js')
const Calculate = require('./calculate.js')
const PubSub = require('../helpers/pub_sub.js');
const ResultView = require('../views/single_result_view.js')

const Results = function(){
  this.items = [];
  this.request = new RequestHelper('/api/calculator');
}


const calculate = new Calculate()

Results.prototype.setupEventsListener = function(){

  PubSub.subscribe('FormView:formSubmit', (event) => {
    const container = document.querySelector('div#form')
    result = this.calculate(event.detail);
    this.add(result);
    this.renderResult(result, container)
  })
  PubSub.subscribe('GridView:result-delete-clicked', (event) => {
    const itemToDelete = event.detail;
    this.delete(itemToDelete);
  })
  PubSub.subscribe('SummaryView:result-selected', (event) => {
    const itemToFind = event.detail;
    this.findById(itemToFind)
  })
  PubSub.subscribe('SummaryView:delete-selected', (event) => {
    const deleteResult = event.detail;
    this.delete(deleteResult);
  })
}



Results.prototype.all = function(){
  this.request
  .get()
  .then((listItems) => {
    this.items = listItems;
    PubSub.publish('ResultsModel:all-results', this.items)
  })
  .catch((err) => console.error(err));
}

Results.prototype.findById = function(id){
  this.request
  .findById(id)
  .then((item) => {
    PubSub.publish('Results:item-selected', item)
  })
    .catch((err) => console.error(err));
}

Results.prototype.add = function(newItem){
  this.request
  .post(newItem)
  .then((listItems) => {
    this.items = listItems;
    PubSub.publish('Results:new-item', this.items)
  })
    .catch((err) => console.error(err));
}

Results.prototype.delete = function(itemToDelete){
  const id = itemToDelete._id;
  this.request
  .delete(id)
  .then((listItems) => {
    this.items = listItems;
    PubSub.publish('Results:deleted-item', this.items)
  })
      .catch((err) => console.error(err));
}

Results.prototype.calculate = function(formObject){
 calculator = new Calculate()
 result = calculator.createResult(formObject)
 return result
}

Results.prototype.renderResult = function(resultObject, container){
  const resultView = new ResultView(container)
  container.innerHTML = '',
  resultView.render(resultObject)
}

module.exports = Results;
