//alcance de la variable, ambito de la variable, ambito global o ambito de bloque.
//se le asigno el valor que retorna la funcion generarNumeroSecreto a la variable numeroSecreto
let numeroSecreto = 0;
//implementar nuevamente el numero de veces.
let intentos = 0;
//declarar lista de numeros sorteados
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//elementos captura imputs cambiando la funcion intentoDeUsuario por verificarIntento, se ajusta en el html
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//en el html se le quita el atributo disabled al boton nuevo juego cuando acierta
    } else{
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto) {
           asignarTextoElemento('p','El numero secreto es menor'); 
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        //llamado funcion limpiarcaja
        limpiarCaja();
    }
    return;
}

//funcion que ayuda a limpiar el input donde se ingresa el valor a adivinar
function limpiarCaja(){
    // el parametro del query selector lleva el # para indicar que es una busqueda por ID
    //let valorCaja = document.querySelector('#valorUsuario');
    document.querySelector('#valorUsuario').value = '';//forma mas limpia de hacer la linea de arriba para limpiar caja
}

//funcion para numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta incluido en la lista 
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    } else{
    if (listaNumerosSorteados.includes(numeroGenerado)) {//se va a aplicar recursividad en la siguiente linea. ojo con la condicion de salida.
        return generarNumeroSecreto();
        }else {
        listaNumerosSorteados.push(numeroGenerado);//se agrega el numero generado a la lista y se retorna el valor.
        //push para agregar ultimo elemento, pop para eliminar el ultimo
        return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();//hace los 3 pasos anteriores
    //desahabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//llamado de funcionar asignar texto
condicionesIniciales();





