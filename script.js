
/*La calculadora calcula bien con números de 1 dígito. Para operaciones de 2 dígitos solo lo he conseguido con el primer operando de dos cifras 
y el segundo solo con una cifra, siento si no está perfecto*/


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
let numGuardado = "0"
let numInicio = 1

//Funciones para las operaciones


function suma() {
    if (resultado.length >= 3) {
        return resultado[1] + resultado[2];
    } else {
        return resultado[0] + resultado[1];
    }
}

function resta() {
    if (resultado.length >= 3) {
        return resultado[1] - resultado[2];
    } else {
        return resultado[0] - resultado[1];
    }
}

function multiplicacion() {
    if (resultado.length >= 3) {
        return resultado[1] * resultado[2];
    } else {
        return resultado[0] * resultado[1];
    }
}

function division() {
    if (resultado.length >= 3) {
        return resultado[1] / resultado[2];
    } else {
        return resultado[0] / resultado[1];
    }
}


//Funciones para los eventos

function handleDisplay (e) {
    if (numGuardado === "0" || numInicio === 1) {
        pantalla.value = e.target.innerText;
        numGuardado = e.target.innerText
        resultado.push(parseInt(numGuardado))
    } else {
        pantalla.value += e.target.innerText;
        numGuardado += e.target.innerText;
        resultado.push(parseInt(numGuardado))
    }
   numInicio = 0 
}

function handlePrevent(e) {
    e.preventDefault()
}

// function handleClick(e) {
//     pantalla.value = e.target.innerText
//     resultado.push(parseInt(e.target.innerText))  
// }

function handleOperator(e) {
    numInicio = 1
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
        pantalla.value = ''
    }
}


//Eventos

clear.addEventListener('click', function handleClear(e) {
    pantalla.value = ''
    resultado = []
})

bodyDOMEl.addEventListener('click', handlePrevent)

for (let i = 0; i < numero.length; i++) {
    // numero[i].addEventListener('click', handleClick)
    numero[i].addEventListener('click', handleDisplay)
}

for (let i = 0; i < operador.length; i++) {
    operador[i].addEventListener('click', handleOperator)
}
