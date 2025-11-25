contador = 0

const id = setInterval(() => {
    contador++
    console.log('contagem (por segundo)', contador)
    if (contador == 10) {
        clearInterval(id)
    }
}, 1000)