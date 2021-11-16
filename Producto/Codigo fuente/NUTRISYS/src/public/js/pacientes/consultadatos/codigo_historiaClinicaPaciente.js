const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
let query = 'http://localhost:3000/paciente/'+pac_nrohc
fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

//Cargar cabecera
const mostrarData = (data) => {
    console.log(data) 
    let solapas=''
    solapas =  `<a class="resumen__solapa"  href="../consultapacientefichainicial/hc=${data.pac_nrohc}">Ficha Inicial</a>
                <a class="resumen__solapa--seleccionado" href="../consultapaciente/hc=${data.pac_nrohc}">Resumen</a>
                <a class="resumen__solapa" href="../consultapacientehabitos/hc=${data.pac_nrohc}">Hábitos</a>
                <a class="resumen__solapa" href="../consultapacientefichas/hc=${data.pac_nrohc}">Evoluciones</a>
                <a class="resumen__solapa" href="">Planes</a>
                <a class="resumen__solapa" href="">Documentos</a>
                <a class="resumen__solapa" href="">Estudios</a>
                <a class="resumen__solapa--resto"></a>`        
    document.getElementById('solapas').innerHTML = solapas  
    let cabecera =''
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
    let resumen = ''
    resumen += `<h3>Domicilio:</h3><h3>${data.pac_direccion}</h3><h3>Localidad / Provincia:</h3><h3>Córdoba / Córdoba</h3><h3>Profesión:</h3><h3>${data.ocupacion}</h3><h3>Celular:</h3><h3>${data.pac_telefono1}</h3><h3>Correo:</h3><h3>${data.pac_correo}</h3>`
    document.getElementById('pac_datospersonales').innerHTML = resumen
    let datosnutri =''
    datosnutri += `<h3>Peso Actual: ${data.peso} Kg</h3><h3>Talla: ${data.talla} Mts</h3><h3>BMI: ${data.imc} Kg/m2</h3>`
    document.getElementById('datosnutri').innerHTML = datosnutri
    }
    



function editarpaciente() {
    location.href ="../modificarpaciente/hc="+pac_nrohc
}


