// código feito passo a passo com o auxílio do site: https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript

let finalContrato = new Date("Dec 31, 2023 23:59:59").getTime();

let countDown = setInterval(function() {
    let agora = new Date().getTime();
    let tempoRestante = finalContrato - agora;

    let dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = dias + ' dias, ' + horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos';
}, 1000)