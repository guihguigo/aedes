$(document).ready(function () {
  $('select').material_select();
});

function init() {
  google.load("visualization", "1.1", {packages: ["bar", "line", "corechart", "geochart"]});
  google.setOnLoadCallback(buildMensalByFocoAndRegiaoChart);
  google.setOnLoadCallback(buildAtrasadasChart);
  google.setOnLoadCallback(buildEmDiaChart);
  google.setOnLoadCallback(buildRegionalChart);
}

function constroiLineChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Mês');
  data.addColumn('number', 'Em dia');
  data.addColumn('number', 'Atrasadas');
  data.addRows([
    ['Dezembro 2014', 60.00, 40.00],
    ['Janeiro 2015', 70.75, 30.25],
    ['Feveiro 2015', 28.00, 72.00],
    ['Março 2015', 100.00, 0],
    ['Abril 2015', 18.12, 82.88],
    ['Maio 2015', 28.00, 72.00]
  ]);

  var options = {
    chart: {
      title: 'Percentual dos últimos 6 meses',
      subtitle: 'Em dia e atrasadas do foco ralos: 2015',
    }
  };

  var chart = new google.charts.Line(document.getElementById('chart_percentuais_mensais'));

  chart.draw(data, options);
}

function constroiCityGeoChart() {
  var data = new google.visualization.arrayToDataTable([
    ['City', 'Em dia', 'Atrasada'],
    ['Praia Grande', 100.00, 0],
    ['Santos', 25.75, 74.25],
    ['Cubatão', 10.00, 90.00],
    ['Preuíbe', 0, 100.00],
    ['São Vicente', 50.00, 50.00],
    ['Guarujá', 80.25, 19.75],
    ['Mongaguá', 95.00, 5.00],
    ['Itagenhaem', 80.00, 20.00]
  ]);

  var options = {
    sizeAxis: {minValue: 0, maxValue: 100},
    region: 'BR',
    displayMode: 'markers',
    colorAxis: {colors: ['red', 'blue']},
    'width': 500,
    'height': 300
  };

  var chart = new google.visualization.GeoChart(document.getElementById('chart_regional'));
  chart.draw(data, options);
}


