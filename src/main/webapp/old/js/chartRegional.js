var loaderRegional           = $('#indiceRegionalLoader');
var chartRegionalContainer   = $('#chart_regional');
var cidadesRegionalContainer = $('#cidadesAfetadasContainer');
var regionalBtn              = $('#regiaoRegionalView');
var cidadeBtn                = $('#cidadeRegionalView');

$(regionalBtn).on('click', function() {
  buildRegionalChart();
});

$(cidadeBtn).on('click', function() {
  buildCityChart();
});

function buildRegionalChart() {
  loaderRegional.show()
  chartRegionalContainer.hide();
  cidadesRegionalContainer.hide();

  var data = new google.visualization.arrayToDataTable([
    ['States', 'Popularity'],
    ['São Paulo', 200],
    ['Rio de Janeiro', 300]
  ]);

  var options = {
    'width': 500,
    'height': 300,
    region: 'BR',
    resolution: 'provinces',
    displayMode: 'regions',
    colorAxis: {colors: ['red', 'blue']}
  };

  var chart = new google.visualization.GeoChart(document.getElementById('chart_regional'));

  loaderRegional.hide()
  chartRegionalContainer.show();
  cidadesRegionalContainer.show();
  chart.draw(data, options);
}

function buildCityChart() {
  loaderRegional.show()
  chartRegionalContainer.hide();
  cidadesRegionalContainer.hide();

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

  loaderRegional.hide()
  chartRegionalContainer.show();
  cidadesRegionalContainer.show();
  chart.draw(data, options);
}
