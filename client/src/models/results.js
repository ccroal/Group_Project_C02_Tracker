const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js');

const Results = function(){
  this.items = [];
  this.request = new RequestHelper('/api/calculator')
}

Results.prototype.setupEventsListener = function(){
  PubSub.subscribe('FormView:formSubmit', (event) => {
  const itemToAdd = event.detail;
  this.add(itemToAdd);
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
    PubSub.publish('ResultModels:all-results', this.items)
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

module.exports = Results;
