const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts')

const ResultView = function (container){
  this.container = container;
}

ResultView.prototype.bindEvents = function (){
  PubSub.subscribe('Results:item-selected', (event) => {
    foundItem = event.detail
    console.log(foundItem);
    this.container.innerHTML = '';
    this.render(foundItem);
  })
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

  this.createChart(result);

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

ResultView.prototype.createChart = function(result){
  const chartDiv = document.createElement('div');
  chartDiv.id = 'highchart';
  console.log('result', result);

const chart = Highcharts.chart(this.container, {
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
       },
       title: {
           text: 'CO2 Consumption'
       },
       tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'

},

plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
        }
      }
    },

       series: [{
         name: 'CO2 Consumption',
         colorByPoint: true,
         data: [{
           name: 'Transport',
           y: result.transport,
         },{
           name: 'Power',
           y: result.power,
         },{
           name: 'Food',
           y: result.food,
         },{
           name: 'Air Travel',
           y: result.airTravel,

     }]
   }]

  //  xAxis: {
  // categories: ['Transport', 'Power', 'Food', 'Air Travel']},
  //
  //     yAxis: {
  //         title: {
  //             text: 'CO2 Consumption'
  //         }
  //     },
  //
  //  series: [{
  //  data: [result.transport, result.power, result.food, result.airTravel]}]

})
};






   //     xAxis: {
   //         categories: ['Transport', 'Power', 'Food', 'Air Travel']
   //     },
   //     yAxis: {
   //         title: {
   //             text: 'CO2 Consumption'
   //         }
   //     },
   //     series: [{
   //         data: [result.transport, result.power, result.food, result.airTravel]
   //     }]
   // });

   // console.log('chart', chart);





module.exports = ResultView;
