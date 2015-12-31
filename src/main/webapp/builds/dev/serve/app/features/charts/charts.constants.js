(function() {
  angular.module('aedes').constant('focoURL', {
    BASE_URL: 'focos'
  }).constant('prevencoesURL', {
    BASE_URL: 'prevencoes',
    ESTADO: 'estado',
    MENSAL: 'mes',
    CIDADE: 'cidade',
    FOCO: 'foco'
  }).constant('enderecoURL', {
    BASE_URL: 'enderecos',
    ESTADOS: 'estados',
    CIDADES: 'cidades',
    BAIRROS: 'bairros'
  }).constant('americanAdress', {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    sublocality_level_1: 'long_name',
    administrative_area_level_1: 'long_name',
    administrative_area_level_2: 'long_name',
    country: 'long_name',
    postal_code: 'short_name'
  }).constant('brasilAdress', {
    street_number: 'numero',
    route: 'rua',
    sublocality_level_1: 'bairro',
    administrative_area_level_1: 'estado',
    administrative_area_level_2: 'cidade',
    locality: 'cidade',
    country: 'pais',
    postal_code: 'cep'
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9jaGFydHMuY29uc3RhbnRzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsUUFESCxDQUNZLGVBRFosRUFDNkI7SUFDekIsUUFBQSxFQUFZLFlBRGE7SUFFekIsTUFBQSxFQUFZLFFBRmE7SUFHekIsTUFBQSxFQUFZLFFBSGE7R0FEN0IsQ0FNRSxDQUFDLFFBTkgsQ0FNWSxhQU5aLEVBTTJCO0lBQ3ZCLFFBQUEsRUFBWSxXQURXO0lBRXZCLE9BQUEsRUFBWSxTQUZXO0lBR3ZCLE9BQUEsRUFBWSxTQUhXO0lBSXZCLE9BQUEsRUFBWSxTQUpXO0dBTjNCLENBWUUsQ0FBQyxRQVpILENBWVksZ0JBWlosRUFZOEI7SUFDMUIsYUFBQSxFQUFlLFlBRFc7SUFFMUIsS0FBQSxFQUFPLFdBRm1CO0lBRzFCLFFBQUEsRUFBVSxXQUhnQjtJQUkxQiwyQkFBQSxFQUE2QixXQUpIO0lBSzFCLE9BQUEsRUFBUyxXQUxpQjtJQU0xQixXQUFBLEVBQWEsWUFOYTtHQVo5QixDQW9CRSxDQUFDLFFBcEJILENBb0JZLGNBcEJaLEVBb0I0QjtJQUN4QixhQUFBLEVBQWUsUUFEUztJQUV4QixLQUFBLEVBQU8sS0FGaUI7SUFHeEIsbUJBQUEsRUFBcUIsUUFIRztJQUl4QixRQUFBLEVBQVUsUUFKYztJQUt4QiwyQkFBQSxFQUE2QixRQUxMO0lBTXhCLE9BQUEsRUFBUyxNQU5lO0lBT3hCLFdBQUEsRUFBYSxLQVBXO0dBcEI1QjtBQUFBIiwiZmlsZSI6ImZlYXR1cmVzL2NoYXJ0cy9jaGFydHMuY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FlZGVzJylcbiAgLmNvbnN0YW50KCdwcmV2ZW5jb2VzVVJMJywge1xuICAgIEJBU0VfVVJMIDogICdwcmV2ZW5jb2VzJ1xuICAgIEVTVEFETyAgIDogICdlc3RhZG8nXG4gICAgTUVOU0FMICAgOiAgJ21lbnNhbCdcbiAgfSlcbiAgLmNvbnN0YW50KCdlbmRlcmVjb1VSTCcsIHtcbiAgICBCQVNFX1VSTCA6ICAnZW5kZXJlY29zJ1xuICAgIEVTVEFET1MgIDogICdlc3RhZG9zJ1xuICAgIENJREFERVMgIDogICdjaWRhZGVzJ1xuICAgIEJBSVJST1MgIDogICdiYWlycm9zJ1xuICB9KVxuICAuY29uc3RhbnQoJ2FtZXJpY2FuQWRyZXNzJywge1xuICAgIHN0cmVldF9udW1iZXI6ICdzaG9ydF9uYW1lJ1xuICAgIHJvdXRlOiAnbG9uZ19uYW1lJ1xuICAgIGxvY2FsaXR5OiAnbG9uZ19uYW1lJ1xuICAgIGFkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMTogJ2xvbmdfbmFtZSdcbiAgICBjb3VudHJ5OiAnbG9uZ19uYW1lJ1xuICAgIHBvc3RhbF9jb2RlOiAnc2hvcnRfbmFtZSdcbiAgfSlcbiAgLmNvbnN0YW50KCdicmFzaWxBZHJlc3MnLCB7XG4gICAgc3RyZWV0X251bWJlcjogJ251bWVybydcbiAgICByb3V0ZTogJ3J1YSdcbiAgICBzdWJsb2NhbGl0eV9sZXZlbF8xOiAnYmFpcnJvJ1xuICAgIGxvY2FsaXR5OiAnY2lkYWRlJ1xuICAgIGFkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMTogJ2VzdGFkbydcbiAgICBjb3VudHJ5OiAncGFpcydcbiAgICBwb3N0YWxfY29kZTogJ2NlcCdcbiAgfSlcblxuXG4iXX0=
