var baseUrl = "/aedes";

function getCidades() {
  $.get(
    baseUrl + "/home",
    // {paramOne : 1, paramX : 'abc'},
    function(data) {
       alert('page content: ' + data);
    }
  );
}

function getMes(codigoFoco, estado, cidade, bairro) {
  dados = {codigoFoco: codigoFoco, estado: estado, cidade: cidade, bairro: "teste"};

  var ajaxPromise, promise;
  promise = $.Deferred();

  ajaxPromise = $.ajax({
    type       : 'GET',
    url        : baseUrl + "/prevencoes/mes",
    data       : dados
  });

  ajaxPromise
    .done((function(_this) {
      return function(json, status, ajaxObj) {
        return promise.resolve.apply(_this, [json, ajaxObj]);
    };
  })(this));

  return promise;
}
