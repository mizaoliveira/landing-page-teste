var array = [11, 24, 57, 39, 120, 7]

let contador = 0

function iterador(array) {
    if(array[contador] % 2 == 0) {
        array[contador] *= 2
    } else {
        array[contador] += 10
    }

    contador ++

    if (contador === array.lenght) {
        return array
    }

    return iterador(array)
}

iterador(array)

console.log(array)