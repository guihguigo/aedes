function buildRegionalChart() {
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

  chart.draw(data, options);
}
