let numeroSecreto = 0;
let intentos = 0;

 let numerosSorteados = [];
 let numeroMaximo = 10;

function verificarIntento() {
    // sirve para captar lo q se mande en el imput cuando se envie en el momento q ser le de click al boton 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `)
        //el DOM tiene muchas funciones una de ellas es removeAttribute la cual se encarga de remover el atributo q tenda en el HTML 
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja()
    }
    return;
}
function limpiarCaja() {
    //SI VAMOS A USAR querySelector PARA SELECIONAR UN ELEMENTO EN NUESTRO HTML Y LO QUEROMOS PONER CON EL ID SE PONE SIEMPRE PRIMERO EL (#) POR Q ES UN ID
    // Y SIU LO HACEMOS POR getElementById NO ES NESECARIO PONERLE EL NUMERAL ANTES DEL NOMBRE
    document.getElementById('valorUsuario').value = '';

}

function condicionesIniciales() {
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

    asignarTextoElemento('h1', 'juego del numero secreto ');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);

}


function reiniciarJuego() {
    limpiarCaja();
 
    condicionesIniciales();
    // por medo del DOM tambien se puede habilitar nuevos atributos PARA HABILITAR ES CON LA FUNCION setAttribute() Y ESTA RESIBE COMO PARAMETROS UN ATRIBUTO Y U8N BOOLEAN 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(numerosSorteados)
    
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles ');
        numerosSorteados = [];
        numeroSecreto = generarNumeroSecreto();
    
    }else{

        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
    
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}


condicionesIniciales();


