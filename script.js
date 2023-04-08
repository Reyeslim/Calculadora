
//Elementos

const numero = document.querySelectorAll('.btn.number')
const pantalla = document.querySelector('#calc-disp')
const operador = document.querySelectorAll('.btn.operator')
const igual = document.querySelector('.equal')
const mas = document.querySelector('.add')
const menos = document.querySelector('.subtract')
const dividir = document.querySelector('.divide')
const multiplicar = document.querySelector('.multiply')
const clear = document.querySelector('.clear')
const bodyDOMEl = document.querySelector('body')

//Almacenamiento de numeros

let resultado = [] 

//Funciones para las operaciones


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


//Funciones para los eventos


function handlePrevent(e) {
    e.preventDefault()
}

function handleClick(e) {
    pantalla.value = e.target.innerText
    resultado.push(parseInt(e.target.innerText))  
}

function handleOperator(e) {
    if (e.target === mas) {
        igual.addEventListener('click', function handleResult(e) {
            pantalla.value = suma()
        })
    } else if (e.target === menos) {
        igual.addEventListener('click', function handleResult(e) {
            pantalla.value = resta()
        })
    } else if (e.target === dividir) {
        igual.addEventListener('click', function handleResult(e) {
            pantalla.value = division()
        })
    } else if (e.target === multiplicar) {
        igual.addEventListener('click', function handleResult(e) {
            pantalla.value = multiplicacion()
        })
    } else {
        pantalla.value = 0
    }
}


//Eventos

clear.addEventListener('click', function handleClear(e) {
    pantalla.value = 0
    resultado.pop()
    resultado.shift()
})

bodyDOMEl.addEventListener('click', handlePrevent)

for (let i = 0; i < numero.length; i++) {
    numero[i].addEventListener('click', handleClick)
}

for (let i = 0; i < operador.length; i++) {
    operador[i].addEventListener('click', handleOperator)
}
