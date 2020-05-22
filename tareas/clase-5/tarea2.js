document.querySelector('#mostrar-texto').onclick = function () {
    const $nuestroTitulo = document.querySelector('h1');
    const $nuestroParrafo = document.querySelector('p');

    const $nombreUsuario = document.querySelector('#nombre-usuario').value;
    const $edadUsuario = document.querySelector('#edad-usuario').value;

    $nuestroTitulo.innerText = `Bienvenido, ${$nombreUsuario}!`;
    $nuestroParrafo.innerText = `Tu nombre es ${$nombreUsuario} y tenés ${$edadUsuario} años.`;
    return false;
};
