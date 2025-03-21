/*let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo da adivinhaçao';

let subTitulo = document.querySelector('p')
subTitulo.innerHTML = 'teste sua sorte';*/

exibirTextoNaTela('h1', 'jogo da adivinhaçao')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1;
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = parseInt(document.querySelector('input')).value;
    console.log(chute === numeroSecreto);
}

    //function verificarChute() {
        //alert('Apertou o botao')
   // }

