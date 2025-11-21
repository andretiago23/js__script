//contar quantos números pares e quantos números impares temos entre 0 e 100

let numerosPares = 0
let numerosImpares = 0

//laco de repeticao

for (contador = 0; contador <= 100; contador++) {
    if (contador % 2 <= 0) {
        numerosPares++
    }
    else {
        numerosImpares++
    }
}
console.log('total de numeros pares:', numerosPares)
console.log('total de numeros impares:', numerosImpares)