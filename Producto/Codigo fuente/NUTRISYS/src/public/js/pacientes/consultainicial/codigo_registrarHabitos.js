var metodo=''
//Get nrohc
const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,(url.indexOf("/trn="),url.indexOf("hc=")+3,(url.indexOf("/trn="))-(url.indexOf("hc=")+3)))
let cons_idturno = url.substr(url.indexOf("trn=")+4,url.length)
let modo = url.substr(url.indexOf("consulta/"),url.length)

if (modo.toLowerCase()==='consulta/registrarhabitos/hc='+pac_nrohc+"/trn="+cons_idturno){
    nuevo=1;
    metodo='POST'
    rutac="http://localhost:3000/cabecerahabitos"
    rutad="http://localhost:3000/detallehabitos"
}else{
    nuevo=0;
    metodo='PUT'
    rutac="http://localhost:3000/actualizarAnamnesis/"+pac_nrohc
    rutad="http://localhost:3000/actualizarAnamnesis/"+pac_nrohc
}
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

//Cargar habitos
     if (nuevo=1) {
    

        let queryh = 'http://localhost:3000/habitos'
        fetch(queryh)
                .then(response => response.json())
                .then(hab => cargarhabitos(hab))
                .catch(error => console.log(error))
        const cargarhabitos = (hab) => {
            console.log(hab)   
            const $select = document.querySelector("#duallist");
            for (let i = 0; i<hab.length; i++){
                const option = document.createElement('option');
                option.value = hab[i].hab_id
                option.text = hab[i].hab_descripcion;
                $select.appendChild(option); 
            }
        }}
 




//registrar habitos del paciente
function registrarhabitos() {
    var sel = document.getElementById("bootstrap-duallistbox-selected-list_duallistbox_demo1[]"); 
    if (sel.length>0){
        //CABECERA
    let qcons = 'http://localhost:3000/consulta/'+cons_idturno
    fetch(qcons)
            .then(response => response.json())
            .then(data => buscarconsulta(data))
            .catch(error => console.log(error))
    const buscarconsulta = (data) => {
        console.log(data)
        let hab_idconsulta = data.cons_id 
    
	    const post = {
            habpac_nrohc: pac_nrohc,
            habpac_observaciones: '',
            habpac_idconsulta: hab_idconsulta
        }
        console.log(post)
        try {
            console.log(JSON.stringify(post));
            fetch(rutac,{
            method:metodo,
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json"
            }
            }).then(res=>res.json())
            .then(data=>console.log(data))
    } catch (error) {
        swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
        console.log(error)
    }}
    //DETALLE
    let query = 'http://localhost:3000/habitospaciente/'+pac_nrohc
    fetch(query)
        .then(response => response.json())
        .then(pachab => registrardetalle(pachab))
        .catch(error => console.log(error))
    const registrardetalle = (pachab) => {
    console.log(pachab)
    var habpac_id = pachab.habpac_id +1
	for (var i = 0; i < sel.length; i++) 
	{
		var opt = sel[i].text;
        const post = {
            dhabpac_id: habpac_id,
            dhabpac_idhabito: sel[i].value,
            dhabpac_observaciones: sel[i].text
        }
        console.log(post)
          try {
            console.log(JSON.stringify(post));
            fetch(rutad,{
            method:metodo,
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
		//alert(opt.value);
	}}
    swal("Consulta Registrada","Consulta del Paciente "+pac_nrohc+" Registrada con Éxito!","success")
                .then((value) => {
                        location.href ="/pacientes/buscarpaciente"})
    }else{
        swal("Atención","Debe seleccionar al menos un hábito de la grilla.","warning" )
    }
}


function nuevoHabito(){
    document.getElementById('nuevoHabito').hidden = false;
    document.getElementById('Aceptar').hidden = false;
    document.getElementById('Cancelar').hidden = false;
}
function añadirHabito(id){
    if (id = 'Aceptar')
    {
        if (document.getElementById('nuevoHabito').value=='') {
            swal("Atención","Debe ingresar un nuevo Habito.","warning" )
        }else{
            let quhab = 'http://localhost:3000/ultimohabito'
            fetch(quhab)
                .then(response => response.json())
                .then(data => ultimohabito(data))
                .catch(error => console.log(error))
            const ultimohabito = (data) => {
            console.log(data)
            id_hab=data.id_hab+1
            let habito = document.getElementById('nuevoHabito').value
            console.log(habito)
            const nuevohabito = {
                hab_descripcion: habito
            }
            try {
                console.log(JSON.stringify(nuevohabito));
                fetch("http://localhost:3000/habitos",{
                method:"POST",
                body: JSON.stringify(nuevohabito),
                headers: {
                    "Content-type": "application/json"
                }
                }).then(res=>res.json())
                .then(data=>console.log(data))        
            } catch (error) {
                swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            }
            document.getElementById('nuevoHabito').value = '';
            document.getElementById('nuevoHabito').hidden = true;
            document.getElementById('Aceptar').hidden = true;
            document.getElementById('Cancelar').hidden = true;
            console.log(habito)
            agregaritem(habito,id_hab)
        }}
    }else{
        document.getElementById('nuevoHabito').value = '';
        document.getElementById('nuevoHabito').hidden = true;
        document.getElementById('Aceptar').hidden = true;
        document.getElementById('Cancelar').hidden = true;
    }
    
}

function agregaritem(hab,idhab){
    const $select = document.querySelector("#duallist");
    const option = document.createElement('option');
    option.value = idhab
    option.text = hab;
    $select.appendChild(option);       
    const $select1 = document.getElementById("bootstrap-duallistbox-selected-list_duallistbox_demo1[]");
    const option1 = document.createElement('option');
    option1.value = idhab
    option1.text = hab
    $select1.appendChild(option1);

}



function fichainicial() {
    swal({
        title: "Atención",
        text: "Si retorna a Ficha inicial, no se guardarán los datos seleccionados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            location.href ="/consulta/actualizarfichainicial/hc="+pac_nrohc+"/trn="+cons_idturno
        } 
      }); 
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