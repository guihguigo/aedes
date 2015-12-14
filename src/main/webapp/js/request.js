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
