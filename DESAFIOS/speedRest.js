const Camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'desenvolvedora',
}
const Camila2 = Camila1
console.log(Camila1)
console.log(Camila2)

Camila1 = {
    ...Camila2,
    profissao: 'desenvolvedora Senior',
    PossuiCNH: true,
}
console.log(Camila1)