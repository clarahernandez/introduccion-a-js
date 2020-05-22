let horasTotales = 0;
let minutosTotales = 0;
let segundosTotales = 0;

const $botonAgregarVideo = document.querySelector('#calcular-tiempo');
const $botonResetTiempo = document.querySelector('#reset-tiempo');

const $resultado = document.querySelector('#resultado');

$botonAgregarVideo.onclick = function () {
    let $horasAux, $minutosAux, $segundosAux;

    $minutosAux = Number(document.querySelector('#minutos').value);
    $segundosAux = Number(document.querySelector('#segundos').value);
    $horasAux = Number(document.querySelector('#horas').value);

    segundosTotales = $segundosAux % 60;

    minutosAux = Math.floor($segundosAux / 60) + $minutosAux;
    minutosTotales = $minutosAux % 60;

    horasTotales = horasTotales + $horasAux + Math.floor($minutosAux / 60);

    $resultado.innerText = `El total de tiempo fue ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos.`;

    return false;
};

$botonResetTiempo.onclick = function () {
    horasTotales = 0;
    minutosTotales = 0;
    segundosTotales = 0;
    $resultado.innerText = '';
};
