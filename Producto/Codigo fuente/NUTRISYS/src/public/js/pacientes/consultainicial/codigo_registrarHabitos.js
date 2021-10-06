function nuevoHabito(){
    document.getElementById('nuevoHabito').hidden = false;
    document.getElementById('Aceptar').hidden = false;
    document.getElementById('Cancelar').hidden = false;
}

function añadirHabito(id){
    if (id = 'Aceptar')
    {

    }
    document.getElementById('nuevoHabito').value = '';
    document.getElementById('nuevoHabito').hidden = true;
    document.getElementById('Aceptar').hidden = true;
    document.getElementById('Cancelar').hidden = true;
}