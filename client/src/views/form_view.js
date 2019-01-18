const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form
}


FormView.prototype.rendForm = function() {

const formContainer = createElement('div')
formContainer.id = ('Co2Form')

const heading = this.createHeading("Co2 Questions")

const transport = this .createHeading("Transport")

const question1 = this.createQuestion("How many miles do you travel by car each week?")

const answer1 = this.createInput("number", "Car")

const question2 = this.createQuestion("How many miles do you travel by bus each week?")

const answer2 = this.createInput("number", "Bus")

const question3 = this.createQuestion("How many mailes do you travel by train each week?")

const answer3 = this.createInput("number", "Train")

const question4 = this.createQuestion("How many mailes have you traveled by plane this year?")

const answer4 = this.createInput("number", "Plane")


const foodDrink = this.createHeading("Food and Drink")

const question5 = this.createQuestion("What percentage of you food waste is recycled?")

const answer5 = this.createInput("number", "foodWaste")

const question6 = this.createQuestion("How many plastic bottles/ containers a week do you use on average?")

const answer6 = this.createInput("number", "plasticWaste")

const question7 = this.createQuestion("What is your diet type?")

}


FormView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

FormView.prototype.createInput = function (type, idName, value){
  const input = document.createElement('input')
  input.type = type
  input.id = idName
  input.value = value
  return input;
};

FormView.prototype.createQuestion = function (question) {
  const userQuestion = document.createElement('p')
  userQuestion.textContent = question
  return userQuestion;
}

FormView.prototype.createOption = function (textValue, idName){
  const option = document.createElement('option')
  option.text = textValue
  option.value = textValue
  option.id = idName
  return option;
};

FormView.prototype.createSelect = function () {
  const select = createElement('select')
};


module.exports = FormView;
