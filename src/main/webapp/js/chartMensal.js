var loader         = $('#indiceMensalLoader');
var chartContainer = $('#chart_percentuais_mensais');
var codigoFoco     = $('#menuFocosMensal');
var estado         = $('#estadoMensal');
var cidade         = $('#cidadeMensal');
var bairro         = $('#bairroMensal');

$(codigoFoco).on('change', function() {
  buildMensalByFocoAndRegiaoChart();
});

$(bairro).on('blur', function() {
  buildMensalByFocoAndRegiaoChart();
});

$(cidade).on('change', function() {
  buildMensalByFocoAndRegiaoChart();
});

$(estado).on('change', function() {
  buildMensalByFocoAndRegiaoChart();
});

function buildMensalByFocoAndRegiaoChart() {
  loader.show();
  chartContainer.hide();

  var promise = getMes(codigoFoco.val(), estado.val(), cidade.val(), bairro.val());
  promise.done((function(_this) {
    return function(data) {

      var arData  = [];
      _.each(data, function(month) {
        var map = [];

        _.map(month, function(m, key) {
          if (key != 'chave' )
            map.push(m);
        });

        arData.push(map)
      });

      console.table(arData);

      var dataTable = new google.visualization.DataTable();
      dataTable.addColumn('string', 'Mês');
      dataTable.addColumn('number', 'Em dia');
      dataTable.addColumn('number', 'Atrasadas');
      dataTable.addRows(arData);

      var fomatter = new google.visualization.NumberFormat({pattern: '###.##%'});
      fomatter.format(dataTable, 1);
      fomatter.format(dataTable, 2);

      var options = {
        chart: {
          title: 'Percentual dos últimos '+ arData.length +' meses',
          subtitle: 'Em dia e atrasadas: 2015'
        },

        'width': 800,
        'height': 300
      };

      var chart = new google.charts.Bar(document.getElementById('chart_percentuais_mensais'));

      loader.hide();
      chartContainer.show()
      chart.draw(dataTable, options);
    };
  })(this));
  return promise.always((function(_this) {
    return function() {
      return console.log("ALWAYS");
    };
  })(this));
}
