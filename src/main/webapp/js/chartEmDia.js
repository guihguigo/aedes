function buildEmDiaChart() {
  var loader = $('#indiceAtrasadasLoader');

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Ralos', 90.00],
    ['Calhas', 70.23],
    ['Bebedouros de animais', 69.12],
    ['Recipientes de água', 68.00],
    ['Piscina', 5.23]
  ]);

  // Set chart options
  var options = {'title': 'As 5 prevenções com maior percentual em dia'};

  var chart = new google.visualization.PieChart(document.getElementById('chart_top_em_dia'));
  loader.hide();
  chart.draw(data, options);
}
