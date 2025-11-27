alert('Bem vindo ao jogo!');
let numSecreto = 3;
let chute = prompt('Ecolha um número entre 1 e 6')

if (numSecreto == chute) {
    alert(`Párabens, você acertou o número,`, { numSecreto })
} else {
    alert('você errou')
}