idade = 19
maiorIdade = idade >= 18
possuiCNH = false

podeDirigir = maiorIdade && possuiCNH // and 

console.log('eu posso dirigir?', podeDirigir)

podeViajarSolo = maiorIdade || possuiCNH //or

console.log('eu poso viajar sozinho?', podeViajarSolo)

precisoDeAcompanhante = !maiorIdade //not
console.log('vou precisar de acompanhante?', precisoDeAcompanhante)