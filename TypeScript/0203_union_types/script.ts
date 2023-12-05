console.log('%cTeoria::', 'color: #4bc; font-size: larger')

/**
 * Lembrar sobre os tipos primitivos de JS. 
 * Operações new Number, new Boolean, new String retornam um OBJETO do tipo espefícico.
 */

const num = new Number(100) // Retorna OBJECT
const numero = Number(50)
const n = 10

const str = new String('String') // Retorna OBJECT
const letra = String('Letra')
const l = 'L'

console.log(typeof num)
console.log(typeof numero)
console.log(typeof n)

console.log(typeof str)
console.log(typeof letra)
console.log(typeof l)

// Usando o typeof para tipos primitivos, garante que é um tipo real
if(typeof letra === 'string') {
    console.log('É uma string!')
} else {
    console.log('Não é uma string!')
}



/*
 * OPTIONAL CHAIN
 * Ao passar o "?" após o elemento, ele irá continuar caso o elemento não seja NULL ou UNDEFINED
 * 
 * Ao invés disso:
*/ 

const myButton = document.querySelector('button')

if(myButton) {
    myButton.click()
}

/**
 * Podemos fazer isso:
 */

myButton?.click()
