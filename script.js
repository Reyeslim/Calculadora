
/*La calculadora calcula bien con números de 1 dígito. Para operaciones de 2 dígitos solo lo he conseguido con el primer operando de dos cifras 
y el segundo solo con una cifra, siento si no está perfecto*/


//Elementos

const numero = document.querySelectorAll('.btn.number')
const pantalla = document.querySelector('#calc-disp')
const operadores = document.querySelectorAll('.btn.operator')
const igual = document.querySelector('.equal')
const mas = document.querySelector('.add')
const menos = document.querySelector('.subtract')
const dividir = document.querySelector('.divide')
const multiplicar = document.querySelector('.multiply')
const clear = document.querySelector('.clear')
const bodyDOMEl = document.querySelector('body')

//Almacenamiento de numeros
let resultA = 0
let resultB = 0
let isFirstNum = true

//Funciones para las operaciones


function suma() {
    return Number(resultA) + Number(resultB)
}

function resta() {
    return Number(resultA) - Number(resultB)
}

function multiplicacion() {
    return Number(resultA) * Number(resultB)
}

function division() {
    return Number(resultA) / Number(resultB)
}

//Funciones para los eventos

function handleDisplay (e) {
    if (isFirstNum) {
        resultA += e.target.innerText;
        pantalla.value = Number(resultA)
    } else {
        resultB += e.target.innerText;
        pantalla.value = Number(resultB)
    }

   /* if (numGuardado === "0" || numInicio === 1) {
        pantalla.value = e.target.innerText;
        numGuardado = e.target.innerText
        resultado.push(parseInt(numGuardado))
    } else {
        pantalla.value += e.target.innerText;
        numGuardado += e.target.innerText;
        resultado.push(parseInt(numGuardado))
    }
   numInicio = 0*/
}

function handlePrevent(e) {
    e.preventDefault()
}

// function handleClick(e) {
//     pantalla.value = e.target.innerText
//     resultado.push(parseInt(e.target.innerText))  
// }

function handleOperator(e) {
    if (e.target === mas) {
        isFirstNum = false
        igual.addEventListener('click', function handleResult(e) {
            pantalla.value = suma()
        })
    } else if (e.target === menos) {
        isFirstNum = false
        igual.addEventListener('click', function handleResult(e) {
            pantalla.value = resta()
        })
    } else if (e.target === dividir) {
        isFirstNum = false
        igual.addEventListener('click', function handleResult(e) {
            pantalla.value = division()
        })
    } else if (e.target === multiplicar) {
        isFirstNum = false
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
    resultA = 0
    resultB = 0
    isFirstNum = true
})

bodyDOMEl.addEventListener('click', handlePrevent)

for (let i = 0; i < numero.length; i++) {
    // numero[i].addEventListener('click', handleClick)
    numero[i].addEventListener('click', handleDisplay)
}

for (let i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener('click', handleOperator)
}
