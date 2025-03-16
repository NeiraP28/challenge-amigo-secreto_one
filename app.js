// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombresAmigos = [];


function  asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

document.getElementById('sortearUnAmigo').removeAttribute('disabled');
document.getElementById('reiniciarElJuego').setAttribute('disabled','true');


function agregarAmigo(){
    let amigoUsuario = document.getElementById('amigo').value;
    console.log(amigoUsuario);
if (amigoUsuario == ''){
    alert('Es necesario agregar un nombre')
    return;
} else (listaNombresAmigos.push(amigoUsuario))
console.log(listaNombresAmigos);

    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();

    mostrarLista();
}

function mostrarLista (){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

 for (let i = 0; i < listaNombresAmigos.length; i++){
        let elemento = document.createElement("li");
        elemento.textContent = listaNombresAmigos[i];
        listaAmigos.appendChild(elemento);
    }

}

function sortearAmigo(){
    if (!listaNombresAmigos.length){
        alert('No hay amigos para sortear')
        return;
    } else {
    let nombreAlea = listaNombresAmigos[Math.floor(Math.random()*listaNombresAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo sorteado es: ${nombreAlea}`;
   limpiarListaDeAmigos();
   let descubrioAmigo = document.querySelector('#mensajeInicio');
   descubrioAmigo.innerHTML = '¡Descubrimos a tu amigo secreto!';
    }
    document.getElementById('reiniciarElJuego').removeAttribute('disabled');
    
}

function limpiarListaDeAmigos (){
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}

/*function reiniciarJuego (){
    let textoInicial = document.getElementById('reiniciarElJuego');
    textoInicial.innerHTML ='¿Quién será tu amigo secreto?';
    
    asignarTextoElemento('h1','¿Quién será tu amigo secreto?');
    document.getElementById('sortearUnAmigo').setAttribute('disabled','true');
    return;
    
}*/
function reiniciarJuego() {
    asignarTextoElemento('h1', '¿Quién será tu amigo secreto?');

    let mensajeInicio = document.querySelector('#mensajeInicio');
    mensajeInicio.innerHTML = 'Ingresa los nombres de tus amigos';

    listaNombresAmigos = [];  

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

    let resultado = document.getElementById("resultado");
    resultado.textContent = "";

    //document.getElementById('sortearUnAmigo').setAttribute('disabled', 'true');
    document.getElementById('reiniciarElJuego').setAttribute('disabled', 'true');
}






   


