// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';

let tentativas = 5;

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10) + 1;
}

let numeroSecreto = 5
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}

function verificarChute() {
    if(tentativas >0) {
        let chute = parseInt(document.querySelector('input').value);
        tentativas--;
        if(chute === numeroSecreto) {
            exibirTextoNaTela('h1', 'Parabens! Voce acertou!');
        }else {
            if(tentativas === 0) {
                exibirTextoNaTela('h1', `Você perdeu!`)
            }else if(chute < numeroSecreto){
                exibirTextoNaTela('h1', `Você errou, o número secreto maior, você tem mais ${tentativas} tentativas`)
            }else {
                exibirTextoNaTela('h1', `Você errou, o número secreto é menor, você tem mais
                     ${tentativas} tentativas`)
            }
        }
    }      
} 


//<h1>Jogo de adivinhação</h1>
//<p>Escolha um número entre 1 e 100</p>

