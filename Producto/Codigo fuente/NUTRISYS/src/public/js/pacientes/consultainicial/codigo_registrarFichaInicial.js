 var metodo=''
 var hab_idconsulta
//Get nrohc
const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,(url.indexOf("/trn="),url.indexOf("hc=")+3,(url.indexOf("/trn="))-(url.indexOf("hc=")+3)))
let cons_idturno = url.substr(url.indexOf("trn=")+4,url.length)
let modo = url.substr(url.indexOf("consulta/"),url.length)


if (modo.toLowerCase()==='consulta/registrarfichainicial/hc='+pac_nrohc+'/trn='+cons_idturno){
    nuevo=1;
    metodo='POST'
    ruta="http://localhost:3000/registrarfichainicial"
}else{
    nuevo=0;
    metodo='PUT'
    ruta="http://localhost:3000/actualizarfichainicial/"+pac_nrohc
}
console.log(pac_nrohc,cons_idturno,nuevo,metodo,ruta,modo)

//Buscar datos personales del nrohc
let query = 'http://localhost:3000/paciente/'+pac_nrohc
fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
const mostrarData = (data) => {
    console.log(data)   
    let cabecera =''
    cabecera += `<h2>Paciente: ${data.pac_apellido}, ${data.pac_nombre}</h2><h2>HC: ${data.pac_nrohc}</h2><h2>DOC.: ${data.pac_nrodoc}</h2><h2>FN: ${data.pac_fechanac}</h2>`        
    document.getElementById('pac_datos').innerHTML = cabecera
    }

//Setear fecha actual
var f = new Date();
let mes=f.getMonth()+1
let dia=f.getDate() 
if(mes<10){
    f=f.getFullYear() + "-0"+ mes+ "-"  
  }else{
    f=f.getFullYear() + "-"+ mes+ "-" 
  }
  if(dia<10){
    f=f + "0"+ dia
  }else{
    f=f +dia
  }
  
  document.getElementById("fechaactual").value=f

//Cargar pagina según modo

 if (nuevo==0) 
 {
    let query = 'http://localhost:3000/fichainicial/'+pac_nrohc
    fetch(query)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
const mostrarData = (data) => {
    console.log(data.length)
    if (data.length>0) {
        data=data[0]
    
        document.getElementById("hc_diagnostico").value=data.hc_diagnostico;
        document.getElementById("hc_antecedentes").value=data.hc_antecedentes;
        document.getElementById("hc_medicacion").value=data.hc_medicacion;
        document.getElementById("hc_ocupacion").value=data.hc_ocupacion;
        document.getElementById("hc_actividadfisica").value=data.hc_actividadfisica;
        document.getElementById("hc_laboratorios").value=data.hc_laboratorios;
        document.getElementById("hc_antecedentesnutricion").value=data.hc_antecedentesnutricion;
        document.getElementById("hc_edaddieta").value=data.hc_edaddieta;
        document.getElementById("hc_dieta").value=data.hc_dieta;
        document.getElementById("hc_pesoactual").value=data.hc_pesoactual;
        document.getElementById("hc_BMI").value=data.hc_BMI;
        document.getElementById("hc_PD").value=data.hc_PD;
        document.getElementById("hc_Pmin").value=data.hc_Pmin;
        document.getElementById("hc_Pmincuando").value=data.hc_Pmincuando;
        document.getElementById("hc_GC").value=data.hc_GC;
        document.getElementById("hc_MM").value=data.hc_MM;
        document.getElementById("hc_CC1").value=data.hc_CC1;
        document.getElementById("hc_CC2").value=data.hc_CC2;
        document.getElementById("hc_CC3").value=data.hc_CC3;
        document.getElementById("hc_formula").value=data.hc_formula;
        document.getElementById("hc_talla").value=data.hc_talla;
        document.getElementById("hc_PH").value=data.hc_PH;
        document.getElementById("hc_PBMI").value=data.hc_PBMI;
        document.getElementById("hc_Pmax").value=data.hc_Pmax;
        document.getElementById("hc_Pmaxcuando").value=data.hc_Pmaxcuando;
        document.getElementById("hc_GV").value=data.hc_GV;
        document.getElementById("hc_PBI").value=data.hc_PBI;
        document.getElementById("hc_ajuste").value=data.hc_ajuste;
        document.getElementById("hc_medajuste").value=data.hc_medajuste;
    }else{
        location.href ="/consulta/registrarfichainicial/hc="+pac_nrohc+"/trn="+cons_idturno
    }
}    
}  



//Validar campos
function validarDatos(){
  var incompleto = false;
  var correccion = "Datos incompletos o inválidos: " + "\n";

  if(document.getElementById("hc_actividadfisica").value == "")
  {
      correccion = correccion + "*Actividad Fisica" + "\n"
      incompleto = true;
  }

  if(document.getElementById("hc_ocupacion").value == "")
  {
      correccion = correccion + "*Ocupación" + "\n"
      incompleto = true;
  }

  if(document.getElementById("fechaactual").value == "")
  {
      correccion = correccion + "*Fecha" + "\n"
      incompleto = true;
  }

  if(incompleto == true){
      swal("Atención",correccion,"warning" );
      return false;
  }
  else{
      
  }
  
}
function nulo(dato) {
    if (dato == null) {
        return 0
    }
    else{
        return dato
    }
}

function registrarficha() {
  if (validarDatos() == false) {
    return false;
} 
else {
var hc_nrohc = pac_nrohc;
var hc_fechaprimerconsulta =  document.getElementById("fechaactual").value;
var hc_diagnostico = document.getElementById("hc_diagnostico").value;
var hc_antecedentes = document.getElementById("hc_antecedentes").value;
var hc_medicacion = document.getElementById("hc_medicacion").value;
var hc_ocupacion = document.getElementById("hc_ocupacion").value;
var hc_actividadfisica = document.getElementById("hc_actividadfisica").value;
if (document.getElementById("hc_fechalaboratorios").value=='') {
    var hc_fechalaboratorios = null
}
else{
    var hc_fechalaboratorios = document.getElementById("hc_fechalaboratorios").value;
}
var hc_laboratorios = document.getElementById("hc_laboratorios").value;
var hc_antecedentesnutricion = document.getElementById("hc_antecedentesnutricion").value;
var hc_edaddieta = parseInt(document.getElementById("hc_edaddieta").value);
var hc_dieta = document.getElementById("hc_dieta").value;
var hc_pesoactual = parseFloat(document.getElementById("hc_pesoactual").value);
var hc_BMI = parseFloat(document.getElementById("hc_BMI").value);
var hc_PD = parseFloat(document.getElementById("hc_PD").value);
var hc_Pmin = parseFloat(document.getElementById("hc_Pmin").value);
var hc_Pmincuando = document.getElementById("hc_Pmincuando").value;
var hc_GC = parseFloat(document.getElementById("hc_GC").value);
var hc_MM = parseFloat(document.getElementById("hc_MM").value);
var hc_CC1 = parseFloat(document.getElementById("hc_CC1").value);
var hc_CC2 = parseFloat(document.getElementById("hc_CC2").value);
var hc_CC3 = parseFloat(document.getElementById("hc_CC3").value);
var hc_formula = parseFloat(document.getElementById("hc_formula").value);
var hc_talla = parseFloat(document.getElementById("hc_talla").value);
var hc_PH = parseFloat(document.getElementById("hc_PH").value);
var hc_PBMI = parseFloat(document.getElementById("hc_PBMI").value);
var hc_Pmax = parseFloat(document.getElementById("hc_Pmax").value);
var hc_Pmaxcuando = document.getElementById("hc_Pmaxcuando").value;
var hc_GV = parseFloat(document.getElementById("hc_GV").value);
var hc_PBI = parseFloat(document.getElementById("hc_PBI").value);
var hc_ajuste = document.getElementById("hc_ajuste").value;
var hc_medajuste = parseFloat(document.getElementById("hc_medajuste").value);

if (nuevo==1) {
    const post = {
        cons_idturno: cons_idturno,
        cons_observaciones: 'Consulta Inicial'
    }
    console.log(post)
      try {
        console.log(JSON.stringify(post));
        fetch('http://localhost:3000/consulta',{
        method:'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json"
        }
        }).then(res=>res.json())
        .then(data=>console.log(data))
    } catch (error) {
        swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
        console.log(error)
    }  

    const post2 = {
        turno_idestado: 4}
    console.log(post2)
     try {
        console.log(JSON.stringify(post2));
        fetch("http://localhost:3000/actualizarturno/"+cons_idturno,{
        method:"PUT",
        body: JSON.stringify(post2),
        headers: {
        "Content-type": "application/json"
        }
        })  .then(res=>res.json())
            .then(data=>console.log(data))
    } catch (error) {
        swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
        console.log(error)
        } 
}


const post = {
    hc_nrohc: hc_nrohc,
    hc_fechaprimerconsulta: hc_fechaprimerconsulta,
    hc_diagnostico: hc_diagnostico,
    hc_antecedentes: hc_antecedentes,
    hc_medicacion: hc_medicacion,
    hc_ocupacion: hc_ocupacion,
    hc_actividadfisica: hc_actividadfisica,
    hc_fechalaboratorios: hc_fechalaboratorios,
    hc_laboratorios: hc_laboratorios,
    hc_antecedentesnutricion: hc_antecedentesnutricion,
    hc_edaddieta: hc_edaddieta,
    hc_dieta: hc_dieta,
    hc_pesoactual: hc_pesoactual,
    hc_BMI: hc_BMI,
    hc_PD: hc_PD,
    hc_Pmin: hc_Pmin,
    hc_Pmincuando: hc_Pmincuando,
    hc_GC: hc_GC,
    hc_MM: hc_MM,
    hc_CC1: hc_CC1,
    hc_CC2: hc_CC2,
    hc_CC3: hc_CC3,
    hc_formula: hc_formula,
    hc_talla: hc_talla,
    hc_PH: hc_PH,
    hc_PBMI: hc_PBMI,
    hc_Pmax: hc_Pmax,
    hc_Pmaxcuando: hc_Pmaxcuando,
    hc_GV: hc_GV,
    hc_PBI: hc_PBI,
    hc_ajuste: hc_ajuste,
    hc_medajuste: hc_medajuste 
}

try {
    console.log(JSON.stringify(post));
    fetch(ruta,{
    method:metodo,
    body: JSON.stringify(post),
    headers: {
        "Content-type": "application/json"
    }
    }).then(res=>res.json())
    .then(data=>console.log(data))
    location.href ="/consulta/actualizaranamnesis/hc="+pac_nrohc+"/trn="+cons_idturno
    console.log()

} catch (error) {
    swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
    console.log(error)
}
}
}
function anamnesis() {
    swal({
        title: "Atención",
        text: "Si avanza a Anamnesis, no se guardarán los datos seleccionados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            location.href ="/consulta/actualizaranamnesis/hc="+pac_nrohc+"/trn="+cons_idturno
        } 
      });
    
}
function habitos() {
    swal({
        title: "Atención",
        text: "Si avanza a Habitos, no se guardarán los datos seleccionados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            location.href ="/consulta/actualizarhabitos/hc="+pac_nrohc+"/trn="+cons_idturno
        } 
      });
    
}
function medidas() {
    swal({
        title: "Atención",
        text: "Si avanza a Medidas Antropométricas, no se guardarán los datos seleccionados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            //location.href ="../actualizarhabitos/hc="+pac_nrohc
        } 
      });
    
}
function calcularbmi(){
    var peso = document.getElementById("hc_pesoactual").value;
    var talla = document.getElementById("hc_talla").value;    
    if(peso==null || peso=='' || talla==null || talla=='') {
        document.getElementById("hc_BMI").value = ''
        return false; 
    } 
    else {
        var bmi = peso / (talla*talla)
        var pbmi = peso/bmi
        document.getElementById("hc_BMI").value =  bmi;
        return document.getElementById("hc_PBMI").value =  pbmi;
    }
}