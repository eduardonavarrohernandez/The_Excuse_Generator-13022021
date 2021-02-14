let quien = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let accion = ['ate', 'peed', 'crushed', 'broke'];
let que = ['my homework', 'the keys', 'the car'];
let cuando = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function btn() {
    function numeroAleatorio(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    let aleatorioQuien = numeroAleatorio(0, quien.length - 1)
    let excusaQuien = quien[aleatorioQuien];

    let aleatorioAccion = numeroAleatorio(0, accion.length - 1)
    let excusaAccion = accion[aleatorioAccion];

    let aleatorioQue = numeroAleatorio(0, que.length - 1)
    let excusaQue = que[aleatorioQue];

    let aleatorioCuando = numeroAleatorio(0, cuando.length - 1)
    let excusaCuando = cuando[aleatorioCuando];

    document.getElementById('excuse').innerHTML = excusaQuien + " " + excusaAccion + " " + excusaQue + " " + excusaCuando;

}
