const pessoa = {
    nome: 'Ana',
    idade: '29',
    temCNH: true
}
pessoaSobrenome = 'Dpaula'

console.log('nome:', pessoa.nome)
console.log('Sobrenome:', pessoa.sobrenome)


const livro = {
    titulo: 'Principe',
    autor: 'homem ',
    paginas: 167
}
livro.publicado = true
livro.idiomas = [
    'ingles', 'portugues', 'espanhol',
]
livro.idiomas.push('mandarim')
livro.idiomas.push('francês')
//delete livro.paginas
console.log('livro depois', livro)


