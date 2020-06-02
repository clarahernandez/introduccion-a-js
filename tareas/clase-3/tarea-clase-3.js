// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreUsuario = prompt('Cuál es tu nombre?');
const MI_NOMBRE = 'clara';
const NOMBRE_MAMA = 'gabriela';
if (nombreUsuario.toLocaleLowerCase() === MI_NOMBRE) {
    console.log('Hola, Tocayo! Yo también me llamo' + nombreUsuario);
} else if (nombreUsuario.toLocaleLowerCase() === NOMBRE_MAMA) {
    console.log(`Hola ${nombreUsuario}, te llamás igual que mi mamá.`);
} else {
    console.log('Hola ' + nombreUsuario);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
const edadUsuario = Number(prompt('Cuál es tu edad?'));
const MI_EDAD = 20;
if (MI_EDAD === edadUsuario) {
    console.log('Tenés la misma edad que yo!');
} else if (MI_EDAD <= edadUsuario) {
    console.log('Sos más grande que yo!');
} else if (MI_EDAD >= edadUsuario) {
    console.log('Sos más chico que yo!');
} else {
    console.log('Error');
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const tieneDocumento = prompt('Tenés documento? Contestá con si o con no.');
if (tieneDocumento.toLocaleLowerCase() === 'si') {
    const edadUs = Number(prompt('Cuántos años tenés?'));
    if (edadUs >= 18) {
        console.log('Podés entrar al bar.');
    } else {
        console.log('No podés entrar al bar.');
    }
} else if (tieneDocumento.toLocaleLowerCase() === 'no') {
    console.log('No podés entrar al bar.');
} else {
    console.log('No entiendo la respuesta.');
}
