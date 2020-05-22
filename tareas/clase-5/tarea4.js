let listaNumeros = document.querySelectorAll('li');
console.log(listaNumeros);
let i, suma;

for (i = 0, suma = 0; i < listaNumeros.length; i++) {
    suma += Number(listaNumeros[i].innerText);
}
