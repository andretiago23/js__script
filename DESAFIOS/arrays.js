const frutas = ['maçã', 'morango', 'kiwi', 'pera', 'jaca']
// //maçã = 0 
// // jaca = 4 
// frutas.push('uva')
// console.log('primeira fruta', frutas[0])
// console.log('ultima fruta', frutas[4])
// console.log(' numero de frutas ', frutas.length)

//console.log(frutas)
//frutas.splice(2, 1)
//console.log(frutas)
// for (let i = 0; i < frutas.length; i++) {
//     console.log('indice1:', i0000)
//     console.log(frutas[i])
// }
console.log('usando ForEach:')
frutas.forEach((valor, indice) => {
    console.log('indice', indice, valor)
})


console.log('usando for of: ')
for (const fruta of frutas) {
    console.log('frutas da vez:', fruta)
}
