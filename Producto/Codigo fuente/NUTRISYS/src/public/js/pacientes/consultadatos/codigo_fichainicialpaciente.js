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
    solapas += `<a class="nav__solapa--seleccionado"  href="../consultapacientefichainicial/hc=${data.pac_nrohc}">Ficha Inicial</a><a class="nav__solapa" href="../consultapaciente/hc=${data.pac_nrohc}">Resumen </a><a class="nav__solapa" href="../consultapacienteevolucion/hc=${data.pac_nrohc}">Evoluciones</a><a class="nav__solapa" href="../consultapacientefichas/hc=${data.pac_nrohc}">Fichas</a><a class="nav__solapa" href="../consultapacienteplan/hc=${data.pac_nrohc}">Planes</a><a class="nav__solapa" href="../consultapacientedocumentos/hc=${data.pac_nrohc}">Documentos</a><a class="nav__solapa" href="../consultapacienteestudios/hc=${data.pac_nrohc}">Estudios</a><a class="nav__solapa--resto"></a>`
    let cabecera =''
    document.getElementById('solapas').innerHTML = solapas
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
    let resumen = ''
    resumen += `<h3>Nacionalidad:</h3><h3>Argentina</h3><h3>Domicilio:</h3><h3>${data.pac_direccion}</h3><h3>Localidad / Provincia:</h3><h3>Córdoba / Córdoba</h3><h3>Profesión:</h3><h3>${data.hc_ocupacion}</h3><h3>Celular:</h3><h3>${data.pac_telefono1}</h3><h3>Correo:</h3><h3>${data.pac_correo}</h3>`
    document.getElementById('pac_datospersonales').innerHTML = resumen
    }

//cargar datos ficha inicial
let queryficha = 'http://localhost:3000/fichainicial/'+pac_nrohc
fetch(queryficha)
        .then(response => response.json())
        .then(datos => mostrarFicha(datos))
        .catch(error => console.log(error))
const mostrarFicha = (datos) => {
    console.log(datos)
    document.getElementById("fechaactual").value = datos.fecharegistro
    document.getElementById("hc_diagnostico").value = datos.hc_diagnostico
    document.getElementById("hc_antecedentes").value = datos.hc_antecedentes
    document.getElementById("hc_fechalaboratorios").value = datos.fechalab
    document.getElementById("hc_laboratorios").value = datos.hc_laboratorios
    document.getElementById("hc_laboratorios").value = datos.hc_laboratorios
    document.getElementById("hc_medicacion").value = datos.hc_medicacion
    document.getElementById("hc_actividadfisica").value = datos.hc_actividadfisica
    document.getElementById("hc_ocupacion").value = datos.hc_ocupacion
    document.getElementById("hc_antecedentesnutricion").value = datos.hc_antecedentesnutricion
    document.getElementById("hc_edaddieta").value = datos.hc_edaddieta
    document.getElementById("hc_dieta").value = datos.hc_dieta
    document.getElementById("hc_talla").value = datos.hc_talla
    document.getElementById("hc_BMI").value = datos.hc_BMI
    document.getElementById("hc_PH").value = datos.hc_PH
    document.getElementById("hc_PD").value = datos.hc_PD
    document.getElementById("hc_PBMI").value = datos.hc_PBMI
    document.getElementById("hc_Pmin").value = datos.hc_Pmin
    document.getElementById("hc_Pmincuando").value = datos.hc_Pmincuando
    document.getElementById("hc_Pmax").value = datos.hc_Pmax
    document.getElementById("hc_Pmaxcuando").value = datos.hc_Pmaxcuando
    document.getElementById("hc_GC").value = datos.hc_GC
    document.getElementById("hc_GV").value = datos.hc_GV
    document.getElementById("hc_MM").value = datos.hc_MM
    document.getElementById("hc_PBI").value = datos.hc_PBI
    document.getElementById("hc_CC1").value = datos.hc_CC1
    document.getElementById("hc_CC2").value = datos.hc_CC2
    document.getElementById("hc_CC3").value = datos.hc_CC3
    document.getElementById("hc_formula").value = datos.hc_formula
    document.getElementById("hc_ajuste").value = datos.hc_ajuste
    document.getElementById("hc_medajuste").value = datos.hc_medajuste
    }