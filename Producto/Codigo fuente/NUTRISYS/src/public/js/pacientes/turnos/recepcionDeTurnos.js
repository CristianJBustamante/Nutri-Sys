
var verCancelados = false;
var pacientes
var legajo =""

//Buscar profesionales
let query = 'http://localhost:3000/profesionales'
        		fetch(query)
            	.then(response => response.json())
            	.then(data => getdatos(data))
            	.catch(error => console.log(error))
        		const getdatos = (data) => {
                    console.log(data)
                    let lista =`<option value=""></option>`
                    for (let i = 0; i<data.length; i++){
						lista += `<option value=${data[i].emp_legajo}>${data[i].emp_apellido}, ${data[i].emp_nombre}</option>`
					 }
                     document.getElementById('select-profesional').innerHTML = lista
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
    for (let i = 0; i<pacientes.length; i++){
    //var hcs=["1000","1001","1002"];
        if(hc==pacientes[i].pac_nrohc){
            return true;
        }
    }
    return false
}

function buscarNombrePaciente(hc){
    var nombre;

    var hcs=[
        {hc:"1000", nombre:"Juan Carlos Altamiranda"},
        {hc:"1001", nombre:"Pedro Sanchez"},
        {hc:"1002", nombre:"Dario Vito"}
        ]

        const filtered = pacientes.filter(function(element){
            if(element.pac_nrohc == hc){
                console.log(element.pac_nombre + " " + element.pac_apellido);
                nombre = element.pac_nombre + " " + element.pac_apellido;
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

        const filtered = pacientes.filter(function(element){
            if(element.pac_nrohc == hc){
                console.log(element.pac_nrodoc);
                doc = element.pac_nrodoc;
            }
          });
    
    return doc;

}

function confirmarTurno(momento,nrohc){
    swal({
        title: "Atención",
        text: "¿Desea Confirmar el Registro del Turno: " +momento._start._d,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            generarTurno(nrohc, momento._start._d, momento._end._d)
            
        } 
      });
}

function generarTurno(hcPaciente, momentoStart, momentoEnd){
    let fecha = new String(momentoStart)
    let horainicio = new String(momentoStart)
    let horafin = new String(momentoEnd)
    fecha = fecha.substr(4,12)
    horainicio = horainicio.substr(16,8)
    horafin = horafin.substr(16,8)
    

    
    const post = {
        turno_legajoempleado: legajo,
        turno_fecha: fecha,
        turno_horainicio: horainicio,
        turno_horafin: horafin,
        turno_nrohc: hcPaciente,
        turno_idtipo: 1,
        turno_idestado: 1
    }
    console.log(post)
      try {
        console.log(JSON.stringify(post));
        fetch('http://localhost:3000/registrarturno',{
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
    
    // Codigo Pos-Back
    swal("Turno Registrado","Se registró el Turno con Éxito!","success");
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
    for (let i = 0; i<pacientes.length; i++){
        if(doc==pacientes[i].pac_nrodoc){
            return true;
        }
    }
    return false
}

function buscarHCPorDoc(doc){

    var hc;

    var hcs=[
        {hc:"1000", doc:"37463213"},
        {hc:"1001", doc:"22321456"},
        {hc:"1002", doc:"29384732"}
        ]

        const filtered = pacientes.filter(function(element){
            if(element.pac_nrodoc == doc){
                console.log("OK");
                hc = element.pac_nrohc;
            }
          });
    
    return hc;
}

function buscarAgendaProfesional(emp_legajo){
    legajo = emp_legajo
    console.log(emp_legajo)
    if (emp_legajo>0) {   
        var eventos = []
        let query = 'http://localhost:3000/turnosempleado/'+emp_legajo
        fetch(query)
            .then(response => response.json())
            .then(turnos => cargarturnos(turnos))
            .catch(error => console.log(error))
        const cargarturnos = (turnos) => {
            console.log(turnos)
		    for (let i = 0; i<turnos.length; i++){
			    var turno = {}
                let titulo
                if (turnos[i].estadoturno_descripcion == null) {
                    titulo = "Reservado"
                }else{
			        titulo = turnos[i].turno_nrohc + " - " + turnos[i].pac_nombre + " " + turnos[i].pac_apellido + " - " + turnos[i].pac_nrodoc
			    }
                var fechahora = turnos[i].turno_fechahora
                var fechahorafin = turnos[i].turno_fechahorafin
                console.log(fechahora,fechahorafin)
			    fechahora = fechahora.substr(0,23)
			    fechahorafin = fechahorafin.substr(0,23)
			    var clase = "label-danger"
			    if (turnos[i].estadoturno_descripcion=='Confirmado') {
				    clase = "label-success"
			    }
			    if (turnos[i].estadoturno_descripcion=='Cancelado') {
				    clase = "label-turno-cancelado label-danger invisible"
			    }
			    if (turnos[i].estadoturno_descripcion=='Receptado') {
				    clase = "label-yellow"
			    }
			    if (turnos[i].estadoturno_descripcion=='En Atención') {
				    clase = "label-info"
			    }
			    if (turnos[i].estadoturno_descripcion=='Finalizado') {
				    clase = "label-brown"
			    }	
			    turno.title = titulo
			    turno.start = new Date(fechahora)
                turno.end = new Date(fechahorafin)
			    turno.allDay = false
			    turno.className = clase
			    turno.estado = turnos[i].estadoturno_descripcion
			    turno.idturno = turnos[i].turno_id
			    turno.nrohc = turnos[i].turno_nrohc
                turno.fecharegistro = turnos[i].turno_fecharegistro
			    eventos.push(turno)	 
		    }
            $('#calendar').fullCalendar('removeEvents')
            $('#calendar').fullCalendar('addEventSource', eventos)
        }
    }else{
        $('#calendar').fullCalendar('removeEvents')
    }
}

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

function actualizarhoraturno(evento,revertFunc){
    swal({
        title: "Atención",
        text: "¿Desea Confirmar la modificación del turno " + evento.title +"?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            let fecha = new String(evento._start._d)
            let horainicio = new String(evento._start._d)
            let horafin = new String(evento._end._d)
            horainicio = horainicio.substr(16,8)
            horafin = horafin.substr(16,8)  
            fecha = fecha.substr(4,12)
            const post = {
                turno_fecha: fecha,
                turno_horainicio: horainicio,
                turno_horafin: horafin
            }
            console.log(post)
            try {
                console.log(JSON.stringify(post));
                fetch('http://localhost:3000/actualizarhoraturno/'+evento.idturno,{
                    method:'PUT',
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
        swal("Turno Registrado","Se registró el Turno con Éxito!","success");    
        } else{
            revertFunc()
        }
      });
}

function generarReservado(evento){
    let fecha = new String(evento._start._d)
    let horainicio = new String(evento._start._d)
    let horafin = new String(evento._end._d)
    fecha = fecha.substr(4,12)
    horainicio = horainicio.substr(16,8)
    horafin = horafin.substr(16,8)
    
    const post = {
        turno_legajoempleado: legajo,
        turno_fecha: fecha,
        turno_horainicio: horainicio,
        turno_horafin: horafin,
        turno_nrohc: null,
        turno_idtipo: 2,
        turno_idestado: null
    }
    console.log(post)
      try {
        console.log(JSON.stringify(post));
        fetch('http://localhost:3000/registrarturno',{
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
    
    // Codigo Pos-Back
    swal("Turno Registrado","Se registró el Turno con Éxito!","success");
    console.log(legajo)
    setTimeout(50000)
    buscarAgendaProfesional(legajo)
}