function buildMensalByFocoAndRegiaoChart() {

  var codigoFoco   = $('#selectMenuFocos').val();
  var estado       = $('#estado').val();
  var cidade       = $('#cidade').val();
  var bairro       = $('#bairro').val();

  var dadosMensais = [
    ['Dezembro 2014', 60.00, 40.00],
    ['Janeiro 2015', 70.75, 30.25],
    ['Feveiro 2015', 28.00, 72.00],
    ['Março 2015', 100.00, 0],
    ['Abril 2015', 18.12, 82.88],
    ['Maio 2015', 28.00, 72.00]
  ]

  var promise = getMes(codigoFoco, estado, cidade, bairro);
  promise.done((function(_this) {
    return function(dadosMensais) {

      var array = $.map(dadosMensais, function(value, index) {
        return [value];
      });

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Mês');
      data.addColumn('number', 'Em dia');
      data.addColumn('number', 'Atrasadas');
      data.addRows(dadosMensais);

      var fomatter = new google.visualization.NumberFormat({pattern: '###.##%'});
      fomatter.format(data, 1);
      fomatter.format(data, 2);

      var options = {
        chart: {
          title: 'Percentual dos últimos 6 meses',
          subtitle: 'Em dia e atrasadas: 2015'
        },

        'width': 800,
        'height': 300
      };

      var chart = new google.charts.Bar(document.getElementById('chart_percentuais_mensais'));
      chart.draw(data, options);
    };
  })(this));
  return promise.always((function(_this) {
    return function() {
      return console.log("ALWAYS");
    };
  })(this));
}
