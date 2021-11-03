var metodo=''
//Get nrohc
const url = new String(window.location)
let pac_nrohc = url.substr(url.indexOf("hc=")+3,(url.indexOf("/trn="),url.indexOf("hc=")+3,(url.indexOf("/trn="))-(url.indexOf("hc=")+3)))
let cons_idturno = url.substr(url.indexOf("trn=")+4,url.length)

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
    calcularEdad(data.pac_fechanacimiento)
    }


    function calcularEdad(fnac){
        var userinput = fnac;
        var dob = new Date(userinput);
        //calculate month difference from current date in time
        var month_diff = Date.now() - dob.getTime();
        
        //convert the calculated difference in date format
        var age_dt = new Date(month_diff); 
        
        //extract year from date    
        var year = age_dt.getUTCFullYear();
        
        //now calculate the age of the user
        var age = Math.abs(year - 1970);
        
        //display the calculated age
        return document.getElementById("edad__paciente").value =  age ;

    }
    
    function registrarPaciente(){
        var cons_edad = parseFloat(document.getElementById("edad__paciente").value);
        var cons_peso = parseFloat(document.getElementById("cons_peso").value);
        var cons_talla =  parseFloat(document.getElementById("cons_talla").value);
        var cons_CCM = parseFloat(document.getElementById("cons_CCM").value);
        var cons_CCU = parseFloat(document.getElementById("cons_CCU").value);
        var cons_CCP = parseFloat(document.getElementById("cons_CCP").value);
        var cons_IMC = parseFloat(document.getElementById("cons_IMC").value);
        var cons_GC = parseFloat(document.getElementById("cons_GC").value);
        var cons_GV = parseFloat(document.getElementById("cons_GV").value);
        var cons_M = parseFloat(document.getElementById("cons_M").value);
        var cons_PBI = parseFloat(document.getElementById("cons_PBI").value);
        var cons_observaciones = (document.getElementById("cons_observaciones").value);

        const post = {
            cons_idturno: cons_idturno,
            cons_observaciones: cons_observaciones,
            cons_edad: cons_edad,
            cons_peso: cons_peso,
            cons_talla: cons_talla,
            cons_CCM: cons_CCM,
            cons_CCU: cons_CCU,
            cons_CCP: cons_CCP,
            cons_IMC: cons_IMC,
            cons_GC: cons_GC,
            cons_GV: cons_GV,
            cons_M: cons_M,
            cons_PBI: cons_PBI,
        }
        try {
            console.log(JSON.stringify(post));
            fetch("http://localhost:3000/nuevaconsulta",{
            method:"POST",
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json"
            }
            }).then(res=>res.json())
            .then(data=>console.log(data))
            
                swal("Consulta Registrada","Consulta del Paciente "+pac_nrohc+" Registrada con Éxito!","success")
                    .then((value) => {
                            location.href ="/pacientes/buscarpaciente"})
          
    
        } catch (error) {
            swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
            console.log(error)
        }
        
         
          
        }
        
    