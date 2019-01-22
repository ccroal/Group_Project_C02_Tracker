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


module.exports = SummaryView;
