const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form
}


FormView.prototype.rendForm = function() {

const form = createElement('form')
form.id = ("new-form")
form.appendChild(formContainer)

const formContainer = createElement('div')
formContainer.id = ('Co2Form-wrap')

const heading = this.createHeading("Co2 Questions")
formContainer.appendChild(heading)

const transport = this .createHeading("Transport")
formContainer.appendChild(transport)

const question1 = this.createQuestion("How many miles do you travel by car each week?")
formContainer.appendChild(question1)

const answer1 = this.createInput("number", "Car")
formContainer.appendChild(answer1)

const question2 = this.createQuestion("How many miles do you travel by bus each week?")
formContainer.appendChild(question2)

const answer2 = this.createInput("number", "Bus")
formContainer.appendChild(answer2)

const question3 = this.createQuestion("How many mailes do you travel by train each week?")
formContainer.appendChild(question3)

const answer3 = this.createInput("number", "Train")
formContainer.appendChild(answer3)

const question4 = this.createQuestion("How many mailes have you traveled by plane this year?")
formContainer.appendChild(question4)

const answer4 = this.createInput("number", "Plane")
formContainer.appendChild(answer4)


const foodDrink = this.createHeading("Food and Drink")
formContainer.appendChild(foodDrink)

const question5 = this.createQuestion("What percentage of you food waste is recycled?")
formContainer.appendChild(question5)

const answer5 = this.createInput("number", "FoodWaste")
formContainer.appendChild(answer5)

const question6 = this.createQuestion("How many plastic bottles/ containers a week do you use on average?")
formContainer.appendChild(question6)

const answer6 = this.createInput("number", "PlasticWaste")
formContainer.appendChild(answer6)

const question7 = this.createQuestion("What is your diet type?")
formContainer.appendChild()

const answer7 = this.createSelect()
formContainer.appendChild(answer7)
const option1 = this.createOption("Vegan", "Food")
answer7.appendChild(option1)

const option2 = this.createOption("Vegetarian", "Food")
answer7.appendChild(option2)

const option3 = this.createOption("Omnivore", "Food")
answer7.appendChild(option3)

const option4 = this.createOption("Carnivore", "Food")
answer7.appendChild(option4)


const gasElectric = this.createHeading("Gas and Electric")
formContainer.appendChild(gasElectric)

const question8 = this.createQuestion("How many k/w do you use in a month?")
formContainer.appendChild(question8)

const answer8 = this.createInput("number", "Energy")
formContainer.appendChild(answer8)

const submit = this.createSubmitButton("button", "submit-button", "Submit")
formContainer.appendChild(submit)
}


FormView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

FormView.prototype.createInput = function (type, idName){
  const input = document.createElement('input')
  input.type = type
  input.id = idName
  input.min = "0"
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

FormView,prototype.createSubmitButton = function(type, idName, name) {
  const button = createElement("input")
  input.type = type
  input.id = idName
  input.textContent = name
  return button;
}


module.exports = FormView;
