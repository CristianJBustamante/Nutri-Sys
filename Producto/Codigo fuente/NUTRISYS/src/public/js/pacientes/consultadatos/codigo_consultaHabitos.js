const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,url.length)
let query = 'http://localhost:3000/paciente/'+pac_nrohc
fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data) 
    let solapas=''
    solapas += `<a class="nav__solapa"  href="../consultapacientefichainicial/hc=${data.pac_nrohc}">Ficha Inicial</a><a class="nav__solapa" href="../consultapaciente/hc=${data.pac_nrohc}">Resumen </a><a class="nav__solapa--seleccionado" href="../consultapacienteevolucion/hc=${data.pac_nrohc}">Hábitos</a><a class="nav__solapa" href="../consultapacientefichas/hc=${data.pac_nrohc}">Fichas</a><a class="nav__solapa" href="../consultapacienteplan/hc=${data.pac_nrohc}">Planes</a><a class="nav__solapa" href="../consultapacientedocumentos/hc=${data.pac_nrohc}">Documentos</a><a class="nav__solapa" href="../consultapacienteestudios/hc=${data.pac_nrohc}">Estudios</a><a class="nav__solapa--resto"></a>`
    let cabecera =''
    document.getElementById('solapas').innerHTML = solapas
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
    }

//Agregar datos a las grillas
let primeros = 'http://localhost:3000/primeroshabitos/'+pac_nrohc
fetch(primeros)
        .then(response => response.json())
        .then(data => cargarprimeroshabitos(data))
        .catch(error => console.log(error))

const cargarprimeroshabitos = (data) => {
    console.log(data)
    for (let i = 0; i<data.length; i++){
        agregaritem(data[i].hab_descripcion,data[i].hab_id,"#primeros")    
    }}
let ultimos = 'http://localhost:3000/ultimoshabitos/'+pac_nrohc
fetch(ultimos)
            .then(response => response.json())
            .then(data => cargarultimoshabitos(data))
            .catch(error => console.log(error))
    
const cargarultimoshabitos = (data) => {
        console.log(data)
        for (let i = 0; i<data.length; i++){
            agregaritem(data[i].hab_descripcion,data[i].hab_id,"#ultimos")    
        }}


    function agregaritem(hab,idhab,grilla){
        const $select = document.querySelector(grilla);
        const option = document.createElement('option');
        option.value = idhab
        option.text = hab;
        $select.appendChild(option);       
    }