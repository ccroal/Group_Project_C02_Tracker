const RequestHelper = require('../helpers/request_helper.js')
const Calculate = require('./calculate.js')
const PubSub = require('../helpers/pub_sub.js');
const Calculate = require('./calculate.js')

const Results = function(){
  this.items = [];

  this.request = new RequestHelper('/app/calculator')

}

const calculate = new Calculate()

Results.prototype.setupEventsListener = function(){

  PubSub.subscribe('FormView:formSubmit', (event) => {
    console.log('Input', event.detail);
  result = this.calculate(event.detail);
  this.add(result)
  console.log('result', result)
  })
  PubSub.subscribe('GridView:result-delete-clicked', (event) => {
    const itemToDelete = event.detail;
    this.delete(itemToDelete);
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

module.exports = Results;
