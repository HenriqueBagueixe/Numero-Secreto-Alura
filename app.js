let valorMaximo = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto)

function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    textoNaTela('h1', 'Jogo do Número Secreto');
    textoNaTela('p', `Escolha um número de 1 a ${valorMaximo}`);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        textoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        textoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            textoNaTela('p', 'O número secreto é menor');
        } else {
            textoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo();
    }
}

function numeroAleatorio() {
    return parseInt(Math.random() * valorMaximo + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}