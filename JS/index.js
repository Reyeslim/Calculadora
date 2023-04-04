const numero = document.querySelectorAll('.btn.number')
const pantalla = document.querySelector('#calc-disp')
const operator = document.querySelectorAll('.btn.operator')
const igual = document.querySelector('.equal')
const mas = document.querySelector('.add')
const menos = document.querySelector('.subtract')
const dividir = document.querySelector('.divide')
const multiplicar = document.querySelector('.multiply')
const clear = document.querySelector('.clear')

const calculadora = document.querySelector('#calculator')

const resultado = []



// function handleClick (event) {
//     console.log(event.target.value);
// }

// for(let i = 0; i < calculadora.length; i++) {
//     calculadora[i].addEventListener('click', handleClick)
// }

function suma() {
    return resultado[0] + resultado[1];
}

function resta() {
    return resultado[0] - resultado[1];
}

function multiplicacion() {
    return resultado[0] * resultado[1];
}

function division() {
    return resultado[0] / resultado[1];
}


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
            igual.addEventListener('click', function handleResult (event) {
                pantalla.value = suma()
            })
        } else if (event.target.value === menos.value) {
            igual.addEventListener('click', function handleResult (event) {
                pantalla.value = resta()
            })
        } else if (event.target.value === dividir.value) {
            igual.addEventListener('click', function handleResult (event) {
                pantalla.value = division()
            })
        } else if (event.target.value === multiplicar.value) {
            igual.addEventListener('click', function handleResult (event) {
                pantalla.value = multiplicacion()
            })
        }
    })
}


clear.addEventListener('click', function handleClick(event) {
    pantalla.value = 0
    resultado.pop()
    resultado.shift()
})
