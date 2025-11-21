function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma(nume1, nume2) {
    return nume1 + nume2
}

function divisao(num1, num2) {
    return num1 / num2
}

resultadoSoma = calcular(4, 4, soma)
console.log('o resultado da soma é:', resultadoSoma)
resultadoDivisao = calcular(20, 4, divisao)
console.log('resultado da divisao:', resultadoDivisao)