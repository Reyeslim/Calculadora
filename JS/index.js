const numero = document.querySelectorAll('.btn.number')
const pantalla = document.querySelector('#calc-disp')
const operator = document.querySelectorAll('.btn.operator')
const igual = document.querySelector('.equal')
const mas = document.querySelector('.add')
const menos = document.querySelector('.subtract')
const dividir = document.querySelector('.divide')
const multiplicar = document.querySelector('.multiply')
const clear = document.querySelector('.clear')

const calculadora = document.querySelector('#calculator-button')

const resultado = []

function suma(a, b) {
    return resultado[0] + resultado[1];
}

function resta(a, b) {
    return resultado[0] - resultado[1];
}

function multiplicacion(a, b) {
    return resultado[0] * resultado[1];
}

function division(a, b) {
    return resultado[0] / resultado[1];
}


console.log(calculadora)

for (let i = 0; i < numero.length; i++) {
    numero[i].addEventListener('click', function handleClick(event) {
        console.log(parseInt(event.target.value))
        resultado.push(parseInt(numero[i].value))
        return pantalla.value = parseInt(numero[i].value)
    }
    )
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function handleClick(event) {
        console.log(event.target.value)
        if (event.target.value === mas.value) {
            return suma()
        } else if (event.target.value === menos.value) {
            return resta()
        } else if (event.target.value === dividir.value) {
            return division()
        } else if (event.target.value === multiplicar.value) {
            return multiplicacion()
        }
    })
}

igual.addEventListener('click', function handleClick(event) {
    return pantalla.value = suma()
})

clear.addEventListener('click', function handleClick(event) {
    pantalla.value = 0
    resultado.pop()
    resultado.shift()
})


