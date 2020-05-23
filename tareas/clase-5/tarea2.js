document.querySelector('#mostrar-texto').onclick = function () {
    const $titulo = document.querySelector('h1');
    const $informacionUsuario = document.querySelector('p');

    const $nombreUsuario = document.querySelector('#nombre-usuario').value;
    const $edadUsuario = document.querySelector('#edad-usuario').value;

    $titulo.innerText = `Bienvenido, ${$nombreUsuario}!`;
    $informacionUsuario.innerText = `Tu nombre es ${$nombreUsuario} y tenés ${$edadUsuario} años.`;
    return false;
};
