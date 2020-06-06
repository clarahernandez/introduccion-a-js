const $calcularTiempo = document.querySelector('#calcular-tiempo');
const $resetearTiempo = document.querySelector('#reset-tiempo');

const $resultado = document.querySelector('#resultado');

$calcularTiempo.onclick = function () {
    const $listaHoras = document.querySelectorAll('.horas');
    const $listaMinutos = document.querySelectorAll('.minutos');
    const $listaSegundos = document.querySelectorAll('.segundos');

    let segundos = 0;
    let minutos = 0;
    let horas = 0;
    $listaSegundos.forEach(($segundosVideo) => {
        segundos = segundos + Number($segundosVideo.value);
    });

    $listaMinutos.forEach(($minutosVideo) => {
        minutos = minutos + Number($minutosVideo.value);
    });

    minutos = Math.floor(segundos / 60) + minutos;
    segundos = segundos % 60;

    $listaHoras.forEach(($horasVideo) => {
        horas = horas + Number($horasVideo.value);
    });

    horas = horas + Math.floor(minutos / 60);
    minutos = minutos % 60;

    $resultado.innerText = `El total de tiempo fue ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

    return false;
};

$resetearTiempo.onclick = function () {
    $resultado.innerText = '';
};
