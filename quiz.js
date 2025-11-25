const readline = require('readline')

const leia = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('Olá, seja bem vindo ao Quiz!')
console.log('responda a questão corretamente: ')
acertos = 0
leia.question('1- Qual a capital do Brasil?\n A)Rio de Janeiro\n b)São Paulo\n c)Brasilia\n : ', (resposta1) => {
    if (resposta1 == 'c') {
        acertos++
        console.log('acertou!')
    } else {
        console.log('errou!')
    }


    leia.question('2- Qual a capital da França?\n a) Paris\n b) Rio de Janeiro\n c) Nova York \n :', (resposta2) => {
        if (resposta2 == 'a') {
            acertos++
            console.log('Acertou!')
        } else {
            console.log('Errou!')
        }
        console.log('numero de acertos:', acertos)

        leia.close()
    })


})
