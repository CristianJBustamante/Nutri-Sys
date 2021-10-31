
var verCancelados = false;

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

function buscarNombrePaciente(hc){
    var nombre;

    var hcs=[
        {hc:"1000", nombre:"Juan Carlos Altamiranda"},
        {hc:"1001", nombre:"Pedro Sanchez"},
        {hc:"1002", nombre:"Dario Vito"}
        ]

        const filtered = hcs.filter(function(element){
            if(element.hc == hc){
                console.log(element.nombre);
                nombre = element.nombre;
            }
          });
    
    return nombre;

}

function buscarDocPaciente(hc){
    var doc;

    var hcs=[
        {hc:"1000", doc:"37463213"},
        {hc:"1001", doc:"22321456"},
        {hc:"1002", doc:"29384732"}
        ]

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

    var hcs=[
        {hc:"1000", doc:"37463213"},
        {hc:"1001", doc:"22321456"},
        {hc:"1002", doc:"29384732"}
        ]

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
}