document.getElementById('btn-borrar').addEventListener('click', borrar);
document.getElementById('btn-resumen').addEventListener('click', resumen);

function borrar(){
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
    document.getElementById('email').value='';
    document.getElementById('cantidad').value='';
    document.getElementById('categoria').value='';
    document.getElementById('aPagar').value='';
}

function resumen(){
    const entrada = 200;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let cant = document.getElementById('cantidad').value;

    const datosValidos = validarDatos(nombre,apellido,cant);

    if(!datosValidos) { 
        alert('todos los campos son obligatorios');
        return;
    }
    
    ///validacion de email///
    expresion = /\w+@\w+\.+[a-z]/;
    if(!expresion.test(email)){
        alert('correo no es valido')
    }
    

    let totalEntradas = entrada * cant;

    let porcentaje = Porcentaje();
    
    //let saldo = totalEntradas -(totalEntradas * porcentaje / 100);
    let saldo = descuento(totalEntradas, porcentaje);   

    //let pagoTotal = totalEntradas - descuento;
    document.getElementById('aPagar').value = 'Total a pagar $' + saldo;

}
function validarDatos(nombre,apellido,cant) {
    if(Number(cant) && String(nombre) && String(apellido)) {  
        return true;
    }
    return false;
}

function Porcentaje(){
    let cat = document.getElementById('categoria').value;
    if(cat === ''){
        return 0;        
    } 
    if(cat === 'estudiante'){
        return 80;        
    }    
    if(cat === 'trainee'){
        return 50;        
    } else {
        return 15;
    }
}

function descuento(totalEntradas, porcentaje){
    return Math.abs(totalEntradas * porcentaje / 100 - totalEntradas)
    //return totalEntradas - (totalEntradas * porcentaje / 100)
}
