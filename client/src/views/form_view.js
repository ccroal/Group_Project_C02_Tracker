const PubSub = require('../helpers/pub_sub.js')

const FormView = function (container) {
  this.container = container
}

FormView.prototype.setupEventListeners = function() {
  // FormView.prototype.rendForm()
  this.container.addEventListener('submit', function (event) {
    event.preventDefault()



    const newItems =
    {car: event.target.car.value,
     bus: event.target.bus.value,
     train: event.target.train.value,
     plane: event.target.plane.value,
     plasticWaste: event.target.plasticWaste.value,
     // // foodType: event.target.foodtype.value,
     energy: event.target.energy.value
  }

    PubSub.publish('FormView:formSubmit', newItems)

  event.target.reset()
    console.log('submitted', newItems);
  })
}

FormView.prototype.rendForm = function() {

const mainForm = document.createElement('form')
mainForm.id = ('new-form')

const formContainer = document.createElement('div')
formContainer.id = ('Co2Form-wrap')
mainForm.appendChild(formContainer)

const heading = this.createHeading('Co2 Questions')
formContainer.appendChild(heading)

const transport = this .createHeading('Plane, Trains and Automobiles')
formContainer.appendChild(transport)

const question1 = this.createQuestion('How many miles do you travel by car each week?')
formContainer.appendChild(question1)

const answer1 = this.createInput('number', 'car')
formContainer.appendChild(answer1)

const question2 = this.createQuestion('How many miles do you travel by bus each week?')
formContainer.appendChild(question2)

const answer2 = this.createInput('number', 'bus')
formContainer.appendChild(answer2)

const question3 = this.createQuestion('How many mailes do you travel by train each week?')
formContainer.appendChild(question3)

const answer3 = this.createInput('number', 'train')
formContainer.appendChild(answer3)

const question4 = this.createQuestion('How many miles have you traveled by plane this year?')
formContainer.appendChild(question4)

const answer4 = this.createInput('number', 'plane')
formContainer.appendChild(answer4)


const foodDrink = this.createHeading('Food and Drink')
formContainer.appendChild(foodDrink)

const question5 = this.createQuestion('What percentage of your waste is recycled?')
formContainer.appendChild(question5)

const answer5 = this.createInput('number', 'foodWaste')
formContainer.appendChild(answer5)

const question6 = this.createQuestion('How many plastic bottles/ containers a week do you use on average?')
formContainer.appendChild(question6)

const answer6 = this.createInput('number', 'plasticWaste')
formContainer.appendChild(answer6)

const question7 = this.createQuestion('What is your diet type?')
formContainer.appendChild(question7)

const answer7 = this.createSelect('foodtype')
formContainer.appendChild(answer7)

  const option1 = this.createOption('vegan', 'food')
  answer7.appendChild(option1)

  const option2 = this.createOption('vegetarian', 'food')
  answer7.appendChild(option2)

  const option3 = this.createOption('omnivore', 'food')
  answer7.appendChild(option3)

  const option4 = this.createOption('heavy meat eater', 'food')
  answer7.appendChild(option4)



const gasElectric = this.createHeading('Gas and Electric')
formContainer.appendChild(gasElectric)

const question8 = this.createQuestion('How many k/w do you use in a month?')
formContainer.appendChild(question8)

const answer8 = this.createInput('number', 'energy')
formContainer.appendChild(answer8)

const submit = this.createSubmitButton('submit', 'submit-button', 'submit')
formContainer.appendChild(submit)

this.container.appendChild(mainForm)
};


FormView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

FormView.prototype.createInput = function (type, idName){
  const input = document.createElement('input')
  input.type = type
  input.id = idName
  input.min = '0'
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

FormView.prototype.createSelect = function (nameid) {
  const select = document.createElement('select')
  select.id = nameid
  return select
};

FormView.prototype.createSubmitButton = function(inputType, idName, name) {
  const button = document.createElement('input')
  button.type = inputType;
  button.id = idName;
  button.textContent = name;
  return button;
}


module.exports = FormView;
