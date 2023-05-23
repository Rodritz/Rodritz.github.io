const textarea = document.querySelector(".textarea");
const mensajeCodificado = document.querySelector(".mensaje-codificado");

const botonEncriptar = document.getElementById("btn-encriptar")
const botonDesencriptar = document.getElementById("btn-desencriptar")
const botonEliminar = document.getElementById("btn-eliminar")
const botonCopiar = document.querySelector(".btn-copiar");
const botonPegar = document.querySelector(".btn-pegar");
const backgroundImagePrevio = mensajeCodificado.style.backgroundImage;
const imagenHacker = document.getElementById("imagen-hacker");




document.getElementById("btn-encriptar").addEventListener("click",encriptar);
document.getElementById("btn-desencriptar").addEventListener("click",desencriptar);
document.getElementById("btn-copiar").addEventListener("click",copiar);
document.getElementById("btn-pegar").addEventListener('click', pegar );
document.getElementById("btn-eliminar").addEventListener('click', eliminar );

function encriptar(){
    if(textarea.value !==""){
        const texto = encriptarMensaje(textarea.value)
        mensajeCodificado.value = texto 
        textarea.value ="";
        imagenHacker.style.display = "none"

        botonEncriptar.innerText = '¡Texto Encriptado!';
        setTimeout(function() {
        botonEncriptar.innerText = 'Encriptar';
        }, 2000);
    }
}    

function encriptarMensaje(mensAEncriptar){
    let listaCodigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensAEncriptar = mensAEncriptar.toLowerCase();

    for(let i = 0; i < listaCodigos.length; i++){
        if(mensAEncriptar.includes(listaCodigos[i][0])){
            mensAEncriptar = mensAEncriptar.replaceAll(listaCodigos[i][0],listaCodigos[i][1])
        }
    }
    return mensAEncriptar
} 

function desencriptar(){
    if(textarea.value !==""){
        const texto = desencriptarMensaje(textarea.value)
        mensajeCodificado.value = texto
        textarea.value ="";
        imagenHacker.style.display = "none"

        botonDesencriptar.innerText = '¡Texto Desencriptado!';
        setTimeout(function() {
        botonDesencriptar.innerText = 'Desencriptar';
        }, 2000);
    }    
}

function desencriptarMensaje(mensAEncriptar){
    let listaCodigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensAEncriptar = mensAEncriptar.toLowerCase();

    for(let i = 0; i < listaCodigos.length; i++){
        if(mensAEncriptar.includes(listaCodigos[i][1])){
            mensAEncriptar = mensAEncriptar.replaceAll(listaCodigos[i][1],listaCodigos[i][0])
        }

    }
    return mensAEncriptar
} 

function copiar(){
    if(mensajeCodificado.value !==""){
        const texto = mensajeCodificado.value;
        navigator.clipboard.writeText(texto);
  
        botonCopiar.innerText = '¡Copiado!';
        setTimeout(function() {
        botonCopiar.innerText = 'Copiar';
        }, 2000);
        mensajeCodificado.value="";
        imagenHacker.style.display = "block"
    }        
}

async function pegar(){
    const textoCopiado = await navigator.clipboard.readText();
    const textarea = document.querySelector('.textarea');    
    textarea.value = textoCopiado;
    mensajeCodificado.value="";
    imagenHacker.style.display = "block"
}

function eliminar(){
    if(textarea.value !=="" || mensajeCodificado.value !== ""){  
        textarea.value ="";
        mensajeCodificado.value = "";
        imagenHacker.style.display = "block"

        botonEliminar.innerText = '¡Eliminado!';
        setTimeout(function() {
        botonEliminar.innerText = 'Eliminar';
        }, 2000);
    }    
}

