const PubSub = require('../helpers/pub_sub.js');

const SummaryView = function (container){
  this.container = container;
}

SummaryView.prototype.render = function(result){
const summaryContainer = document.createElement('div');
summaryContainer.id = 'result';

const totalConsumptionSummary = `Total CO2 Consumption: ${result.total}kgCO2e/year`;
const total = this.createHeading(totalConsumptionSummary);
summaryContainer.appendChild(total);

const transportDistanceSummary = `Total Transort Distance: ${result.transport}kgCO2/year`;
const transport = this.createDetail(transportDistanceSummary);
summaryContainer.appendChild(transport);

const powerAmountSummary = `Total Power: ${result.power}kgCO2e/year`;
const power = this.createDetail(powerAmountSummary);
summaryContainer.appendChild(power);


const singleResult = this.createButton(result, 'View Detailed Result');
singleResult.addEventListener('click', (event) => {
  resultSelected = event.target.value;
  PubSub.publish('SummaryView:result-selected', resultSelected)
})

summaryContainer.appendChild(singleResult);


this.container.appendChild(summaryContainer)
}

SummaryView.prototype.createHeading = function (textContent){
  const heading = document.createElement('h4');
  heading.textContent = textContent;
  return heading;
}

SummaryView.prototype.createDetail = function (textContent){
  const detail = document.createElement('h5');
  detail.textContent = textContent;
  return detail;
}

SummaryView.prototype.createButton = function (result, textContent){
  const button = document.createElement('button');
  button.textContent = textContent
  button.id = 'single-view-button';
  button.value = result._id
  return button
}


module.exports = SummaryView;
