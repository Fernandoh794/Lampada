const ligar = document.querySelector('.ligar');
const desligar = document.querySelector('.desligar')
const lampada = document.querySelector(' .lampada ')




function LampadaLigada() {
  lampada.src = './ligada.jpg'

}
function Lampadadesligada() {
    lampada.src = './desligada.jpg'
}
function LampadaQuebrada() {
    lampada.src = './quebrada.jpg'
}



ligar.addEventListener('click', LampadaLigada);
desligar.addEventListener('click', Lampadadesligada);
lampada.addEventListener('mouseover', LampadaLigada);
lampada.addEventListener('mouseleave', Lampadadesligada);
lampada.addEventListener('dblclick', LampadaQuebrada);