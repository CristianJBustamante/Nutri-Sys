
var verCancelados = false;
var pacientes

var hcs=[
    {hc:"1000", nombre:"Juan Carlos", apellido:"Altamiranda", doc:"37463213", celular:"3518132532"},
    {hc:"1001", nombre:"Pedro", apellido:"Sanchez", doc:"22321456", celular:"3512133213"},
    {hc:"1002", nombre:"Dario", apellido:"Vito", doc:"29384732", celular:"3513212341"}
    ];

//Get legajo profesional
const url = new String(window.location)
let emp_legajo = url.substr(url.indexOf("leg=")+4,url.length)


function verTurnosCancelados(){
   
    const labelReferenciaCancelado = document.querySelector('#referenciaCancelado');
    const labelsTurnoCancelado = document.querySelectorAll('.label-turno-cancelado');
    if(!verCancelados){
        console.log('entra');
        labelReferenciaCancelado.hidden = false;
        verCancelados = true;
        labelsTurnoCancelado.forEach(function(label){
            label.classList.remove('invisible');
        })
    }
    else{
        console.log('sale');
        labelReferenciaCancelado.hidden = true;
        verCancelados = false;
        labelsTurnoCancelado.forEach(function(label){
            label.classList.add('invisible');
        })
    }
}

//GET PACIENTES
query = 'http://localhost:3000/pacientes'
fetch(query)
    .then(response => response.json())
    .then(data => getpacientes(data))
    .catch(error => console.log(error))
const getpacientes = (data) => {
    pacientes = data
}

function verificarPaciente(hc)
{
    //Consulta de Base de Datos
    var hcs=["1000","1001","1002"];
    if(hcs.includes(hc)){
        return true;
    }
    else{
        return false;
    }
}

function buscarNombrePaciente(titulo){
    var nombre;
    var hc = mostrarHC(titulo);

        const filtered = pacientes.filter(function(element){
            if(element.pac_nrohc == hc){
                console.log(element.pac_nombre);
                nombre = element.pac_nombre;
            }
          });
    
    return nombre;

}

function buscarApellidoPaciente(titulo){
    var apellido;
    var hc = mostrarHC(titulo);
        const filtered = pacientes.filter(function(element){
            if(element.pac_nrohc == hc){
                console.log(element.pac_apellido);
                apellido = element.pac_apellido;
            }
          });
    
    return apellido;

}

function buscarCelularPaciente(titulo){
    var celular;
    var hc = mostrarHC(titulo);
        const filtered = pacientes.filter(function(element){
            if(element.pac_nrohc == hc){
                console.log(element.pac_telefono1);
                celular = element.pac_telefono1;
            }
          });
    
    return celular;

}

function buscarDocPaciente(hc){
    var doc;

        const filtered = hcs.filter(function(element){
            if(element.hc == hc){
                console.log(element.doc);
                doc = element.doc;
            }
          });
    
    return doc;

}

function confirmarTurno(momento){

    var result = confirm("Desea confirmar turno: " + momento + " ?.");
    return result;
}

function generarTurno(hcPaciente, momentoStart, momentoEnd){
    // Codigo Pos-Back
    alert("El turno se generó correctamente");
}

function mostrarHC(title){
    var hc = title.split(" - ");
    if (hc[0].match(/^\d/)) {
        return hc[0];
     }
     else{
         return "";
     }
}

function mostrarDoc(title){
    var hc = title.split(" - ");
    if(hc[2] === undefined){
        return "";
    }
    else{
        return hc[2];
    }
    
}

function validarDoc(doc){
    var docs=["37463213","22321456","29384732"];
    if(docs.includes(doc)){
        return true;
    }
    else{
        return false;
    }
}

function buscarHCPorDoc(doc){

    var hc;

        const filtered = hcs.filter(function(element){
            if(element.doc == doc){
                console.log("OK");
                hc = element.hc;
            }
          });
    
    return hc;
}

function receptarTurno(turno){
    console.log(turno);
    const post = {
        turno_idestado: 2}
    console.log(post)
     try {
        console.log(JSON.stringify(post));
        fetch("http://localhost:3000/actualizarturno/"+turno.idturno,{
        method:"PUT",
        body: JSON.stringify(post),
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

function atenderPaciente(turno){
    console.log(turno);
    const post = {
        turno_idestado: 3}
    console.log(post)
     try {
        console.log(JSON.stringify(post));
        fetch("http://localhost:3000/actualizarturno/"+turno.idturno,{
        method:"PUT",
        body: JSON.stringify(post),
        headers: {
        "Content-type": "application/json"
        }
        })  .then(res=>res.json())
            .then(data=>console.log(data))
    } catch (error) {
        swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
        console.log(error)
        } 
        console.log(turno.nrohc)
         let query = 'http://localhost:3000/consultanrohc/'+turno.nrohc
         fetch(query)
         .then(response => response.json())
         .then(consultas => consulta(consultas))
         .catch(error => console.log(error))
         const consulta = (consultas) => {
             console.log(consultas)
             if (consultas.length>0) {
                 location.href = 'http://localhost:3000/consulta/registrarconsulta/hc='+turno.nrohc+'/trn='+turno.idturno
             }else{
                 location.href = '/consulta/registrarFichaInicial/hc='+turno.nrohc+'/trn='+turno.idturno
             }
         }
    
}

function cancelarTurno(turno){
    console.log(turno);
    const post = {
        turno_idestado: 4}
    console.log(post)
     try {
        console.log(JSON.stringify(post));
        fetch("http://localhost:3000/actualizarturno/"+turno.idturno,{
        method:"PUT",
        body: JSON.stringify(post),
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