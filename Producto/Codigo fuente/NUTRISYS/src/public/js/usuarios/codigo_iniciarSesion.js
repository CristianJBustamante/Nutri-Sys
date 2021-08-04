function validarUsuario() {
    const fetch = require('node-fetch');
    var usu_usuario = document.getElementById("usu_usuario").value;
    var usu_clave = document.getElementById("usu_clave").value;
    var url = "http://192.168.0.188:3000/usuario/"+usu_usuario+'/'+usu_clave
    alert(url)
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json[0]);
});
        alert("Paciente registrado con éxito")
}



