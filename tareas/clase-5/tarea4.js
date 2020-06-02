let $listaNumeros = document.querySelectorAll('li');

function pasarALista($listaNumeros) {
    let lista = [];
    for (let i = 0; i < $listaNumeros.length; i++) {
        lista.push(Number($listaNumeros[i].innerText));
    }
    return lista;
}

$listaNumeros = pasarALista($listaNumeros);

console.log($listaNumeros);

function sumaTotal(listaNumeros) {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma = suma + listaNumeros[i];
    }
    return suma;
}

function menorNumero(listaNumeros) {
    let menor = listaNumeros[0];
    for (let i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] < menor) {
            menor = listaNumeros[i];
        }
    }
    return menor;
}

function mayorNumero(listaNumeros) {
    let mayor = listaNumeros[0];
    for (let i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > mayor) {
            mayor = listaNumeros[i];
        }
    }
    return mayor;
}

function masRepetido(listaNumeros) {
    let repetido;
    let cantidadApariciones = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        let numeroAux = listaNumeros[i];
        let cantidadAparicionesAux = 0;
        for (let j = i; j < listaNumeros.length; j++) {
            if (numeroAux === listaNumeros[j]) {
                cantidadAparicionesAux++;
            }
        }
        if (cantidadAparicionesAux >= cantidadApariciones) {
            cantidadApariciones = cantidadAparicionesAux;
            repetido = numeroAux;
        }
    }
    return repetido;
}

document.querySelector('#sumaTotal').innerText = `La suma total de los números es de el ${sumaTotal(
    $listaNumeros
)}`;
document.querySelector('#numeroMenor').innerText = `El menor número de la lista es el ${menorNumero(
    $listaNumeros
)}`;

document.querySelector('#numeroMayor').innerText = `El mayor número de la lista es el ${mayorNumero(
    $listaNumeros
)}`;

document.querySelector(
    '#numeroRepetido'
).innerText = `El número más repetido de la lista es el ${masRepetido($listaNumeros)}`;
