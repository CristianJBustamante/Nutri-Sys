// function seleccionar(){
// let checkbox = document.getElementById('check_1')
//   if (checkbox.checked === true) {
//     alert("habito seleccionado");
//   } 
// }
$(document).ready(function(){
$('.envio').on('click', function() {
  var hermano=$(this).parent();
  $("#tabla2").prepend("<tr>\
                            <td>"+hermano.siblings("td:eq(0)").text()+"</td>\
                            </tr>")
});
});
