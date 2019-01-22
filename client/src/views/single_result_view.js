const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container){
  this.container = container;
}

ResultView.prototype.render = function (result){
  const resultContainer = document.createElement('div');
  resultContainer.id = 'result';

  const totalConsumptionText = `Your average CO2 consumption for the year is ${result.total}KgCO2e/year`;
  const total = this.createHeading(totalConsumptionText);
  resultContainer.appendChild(total);

  const transportDistanceText = `Your total transport results in ${result.transport}KgCO2e/year`;
  const transport = this.createDetail(transportDistanceText);
  resultContainer.appendChild(transport);

  const powerAmountText = `Your total power comsumption results in ${result.power}KgCO2e/year`;
  const power = this.createDetail(powerAmountText);
  resultContainer.appendChild(power);

  const foodTypeText = `Your diet choice results in ${result.food}KgCO2e/year`;
  const food = this.createDetail(foodTypeText);
  resultContainer.appendChild(food);

  const plasticAmountText = `Your plastic usage results in ${result.plastic}KgCO2e/year`;
  const plastic = this.createDetail(plasticAmountText);
  resultContainer.appendChild(plastic);

  const airTravelText = `Your air travel results in ${result.airTravel}KgCO2e/year`;
  const airTravel = this.createDetail(airTravelText);
  resultContainer.appendChild(airTravel);

  this.container.appendChild(resultContainer);
}

ResultView.prototype.createHeading = function (textContent){
  const heading = document.createElement('h2');
  heading.textContent = textContent;
  return heading;
}

ResultView.prototype.createDetail = function (textContent){
  const detail = document.createElement('h3');
  detail.textContent = textContent;
  return detail;

}



module.exports = ResultView;
