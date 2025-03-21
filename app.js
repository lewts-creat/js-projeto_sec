<<<<<<< HEAD
/*let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo da adivinhaçao';

let subTitulo = document.querySelector('p')
subTitulo.innerHTML = 'teste sua sorte';*/

exibirTextoNaTela('h1', 'jogo da adivinhaçao')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1;
=======
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10) + 1;
>>>>>>> 8736d422156657de7aa558959451931e29729623
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

<<<<<<< HEAD

=======
>>>>>>> 8736d422156657de7aa558959451931e29729623
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
<<<<<<< HEAD
    let chute = parseInt(document.querySelector('input')).value;
    console.log(chute === numeroSecreto);
}

    //function verificarChute() {
        //alert('Apertou o botao')
   // }

=======
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute === numeroSecreto);
}

//<h1>Jogo de adivinhação</h1>
//<p>Escolha um número entre 1 e 100</p>
>>>>>>> 8736d422156657de7aa558959451931e29729623
