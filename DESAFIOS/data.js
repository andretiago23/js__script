// const agora = new Date()
// console.log(agora)

// console.log('Ano:', agora.getFullYear())
// console.log('mês-atual:', agora.getMonth())
// console.log('Dia-do-mês:', agora.getDay())
// console.log('hora:', agora.getHours())
//contagem de meses começa do zero
const nascimento = new Date('1988-07-08:09:30.000Z')
console.log(nascimento)

console.log('data formatada (BR):', nascimento.toLocaleDateString('pt-BR'))
console.log('data formatada (US):', nascimento.toLocaleDateString('en-US'))