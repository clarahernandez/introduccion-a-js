//#1 Hecho.

//#2: Imprimí los números impares del 1 al 100
function imprimirImpares() {
    let i;
    for (i = 1; i <= 100; i = i + 2) {
        console.log(i);
    }
}

//#3: Imprimí la tabla de multiplicación del 7
function imprimir7() {
    let i;
    for (i = 0; i <= 10; i++) {
        console.log(i * 7);
    }
}

//#4: Imprimí todas las tablas de multiplicación del 1 al 9
function imprimirTablas() {
    let i, j;
    for (i = 1; i <= 9; i++) {
        for (j = 1; j <= 9; j++) {
            console.log(i + '*' + j + '=' + i * j);
        }
    }
}

//#5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
//hacerlo con un array y un bucle while
function calcularSuma() {
    const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let i = 0;
    let largoArray = ARRAY.length;
    let sumaAcumulada = 0;
    while (i < largoArray) {
        sumaAcumulada = sumaAcumulada + ARRAY[i];
        i++;
    }
    console.log(sumaAcumulada);
}

//#6: Calcula 10! (10 factorial)
function calcularFactorial10() {
    let i;
    let factorial = 1;
    for (i = 10; i > 0; i--) {
        factorial = factorial * i;
    }
    console.log(factorial);
}

//#7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
function calcularImpares10() {
    let i;
    let resultadoAcumulado = 0;
    for (i = 11; i < 30; i = i + 2) {
        resultadoAcumulado = resultadoAcumulado + i;
    }
}

//#8: Crea una función que convierta de Celsius a Fahrenheit
function CelsiusFahrenheit(temperatura) {
    return temperatura * 1.8 + 32;
}

//#9: Crea una función que convierta de Fahrenheit a Celsius
function FahrenheitCelsius(temperatura) {
    return (temperatura - 32) / 1.8;
}

//#10: Calcula la suma de todos los números en un array de números
function sumarElemArray(array) {
    let i = 0;
    let largoArray = array.length;
    let sumaAcumulada = 0;
    while (i < largoArray) {
        sumaAcumulada = sumaAcumulada + array[i];
        i++;
    }
    return sumaAcumulada;
}

//#11: Calcula el promedio de todos los números en un array de números.
function promediarElemArray(array) {
    let suma = desafio10(array);
    return suma / array.length;
}

//#12: Crea una función que reciba un array de números y
//devuelva un array conteniendo solo los números positivos

function elemArrayPositivos(array) {
    let arrayNumerosPositivos = [];
    let i;
    const largoArray = array.length;
    for (i = 0; i < largoArray; i++) {
        if (array[i] > 0) {
            arrayNumerosPositivos.push(array[i]);
        }
    }
    return arrayNumerosPositivos;
}

//#13: Find the maximum number in an array of numbers
function maximoArray(array) {
    let i;
    let numeroMaximo = array[0];
    const largoArray = array.length;
    for (i = 0; i < largoArray; i++) {
        if (numeroMaximo < array[i]) {
            numeroMaximo = array[i];
        }
    }
    return numeroMaximo;
}

//#14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
function fibonacci10() {
    let sucFibonacci = [0, 1];
    let i;
    for (i = 2; i < 10; i++) {
        sucFibonacci.push(sucFibonacci[i - 1] + sucFibonacci[i - 2]);
    }
    return sucFibonacci;
}

//#15: Crear una función que encuentre el número n de Fibonacci usando recursión
function fibonacciN(n) {
    if (n == 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        nfibonacci(n - 1) + nfibonacci(n - 2);
    }
}

//#16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
function esPrimo(n) {
    let i;
    let bandera = true;
    for (i = 2; i < n && bandera; i++) {
        if (n % i === 0) {
            bandera = false;
        }
    }
    return bandera;
}

//#17: Calcular la suma de los dígitos positivos de un número entero positivo
function sumaDigPos(n) {
    let nString = n.toString();
    let cantidadDigitos = nString.length;
    let i;
    let suma = 0;
    for (i = 0; i < cantidadDigitos; i++) {
        suma = suma + Number(nString[i]);
    }
    return suma;
}

// #18: Imprimir los primeros 100 números primos
function imprimirPrimos() {
    const MAX_PRIMO = 100;
    let i, j;
    for (i = 1; i < MAX_PRIMO; i++) {
        if (esPrimo(i)) console.log(i);
    }
}

// #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
function primosDesdeCon(desde, n) {
    let i, j;
    let primos = [];
    for (i = desde; i < n; i++) {
        if (esPrimo(i)) primos.push(i);
    }
    return primos;
}

// #20: Rotar un array hacia la izquierda una posición
/*Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]*/
function rotarIzquierda(array) {
    const LARGO_ARRAY = array.length;
}

//#21: Rotar un array a la derecha una posición
/*Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]*/

//#22: Invertir un array
/*Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]*/

//#23: Invertir una cadena de caracteres
/*Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"*/

//#24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
/*Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]*/

//#25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
/*Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]*/

//#26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
/*Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]*/

//#27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
/*Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]*/

//#28: Calculate the sum of first 100 prime numbers
//#29: Print the distance between the first 100 prime numbers
//#30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
//#30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
//#31-a. Create a function that will return the number of words in a text
//#31-b. Create a function that will return the number of words in a text
//#32. Create a function that will capitalize the first letter of each word in a text
//#33. Calculate the sum of numbers received in a comma delimited string
//#34. Create a function that will return an array with words inside a text
//#35. Create a function to convert a CSV text to a “bi-dimensional” array
//#36. Create a function that converts a string to an array of characters
//#37. Create a function that will convert a string in an array containing the ASCII codes of each character
//#38. Create a function that will convert an array containing ASCII codes in a string
//#39. Implement the Caesar cypher
//#40. Implement the bubble sort algorithm for an array of numbers
//#41. Create a function to calculate the distance between two points defined by their x, y coordinates
//#42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
//43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
//#44. Create a function that will convert a string containing a binary number into a number
//#45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
//#46-a. Find the maximum number in a jagged array of numbers or array of numbers
//#46-b. Find the maximum number in a jagged array of numbers or array of numbers
//#47. Deep copy a jagged array with numbers or other arrays in a new array
//#48. Create a function to return the longest word(s) in a string
//#49. Shuffle an array of strings
//#50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
//#51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
//#52. Calculate Fibonacci(500) with high precision (all decimals)
//#53. Calculate 70! with high precision (all decimals)
