
function buildAtrasadasChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]);

  var options = {'title': 'As 5 prevenções com maior percentual atrasadas'};
  var chart = new google.visualization.PieChart(document.getElementById('chart_top_atrasadas'));

  chart.draw(data, options);
}
